/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Label, Modal, Spinner, TextInput, Textarea } from "keep-react";
import { useEffect, useState } from "react";
import { ITVShow } from "../../interfaces/shows";

const BookingModal = ({ id, showModal, setShowModal, handleModal }: any) => {
  const [showDetails, setShowDetails] = useState<ITVShow>();
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => setShowDetails(data));
  }, [id]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    const contactNo = e.target.contactNo.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const userInfo = { name, contactNo, email, address };
    localStorage.setItem("UserInfo", JSON.stringify(userInfo));
    setShowModal(!showModal);
  };
  return (
    <>
      <Modal size="3xl" show={showModal} position={"center"}>
        {showDetails ? (
          <div className="relative">
            <Modal.Body>
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="mt-12">
                  <img
                    className="w-full rounded-md"
                    src={showDetails?.image?.medium}
                  />
                  <h2 className="mt-3 text-3xl font-semibold">
                    {showDetails?.name}
                  </h2>
                </div>
                <div className=" col-span-2">
                  <h4 className="text-center font-semibold text-2xl">
                    User Info
                  </h4>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <Label htmlFor="#id-8" value="Name" />
                      <TextInput
                        id="#id-8"
                        placeholder="Your Full Name"
                        color="gray"
                        name="name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="#id-8" value="Contact No." />
                      <TextInput
                        id="#id-8"
                        placeholder="Your Phone Number"
                        color="gray"
                        name="contactNo"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="#id-8" value="Email" />
                      <TextInput
                        id="#id-8"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        color="gray"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <Label htmlFor="#id-8" value="Address" />
                      <Textarea
                        id="address"
                        placeholder="Your Address."
                        withBg={true}
                        color="gray"
                        name="address"
                        border={true}
                        rows={4}
                        required
                      />
                    </div>
                    <div className="absolute bottom-0 right-0">
                      <Modal.Footer className="flex justify-end">
                        <Button
                          size={"sm"}
                          type="outlineGray"
                          onClick={handleModal}
                        >
                          Cancel
                        </Button>
                        <div>
                          <input
                            className="border p-2 rounded-md bg-blue-600 hover:bg-blue-800 text-white "
                            type="submit"
                            value={"Confirm"}
                          />
                        </div>
                      </Modal.Footer>
                    </div>
                  </form>
                </div>
                <div className="col-span-2 relative"></div>
              </div>
            </Modal.Body>
          </div>
        ) : (
          <div>
            <Spinner color={"success"} size={"xl"} />
          </div>
        )}
      </Modal>
    </>
  );
};

export default BookingModal;
