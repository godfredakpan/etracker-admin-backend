// @ts-nocheck
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";

export default function UserInfoCard({ userData }) {
  const { isOpen, openModal, closeModal } = useModal();
  
  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saving changes...");
    closeModal();
  };

  return (
    <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
            Personal Information
          </h4>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                First Name
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {userData.firstname}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Last Name
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {userData.lastname}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Email address
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {userData.email}
                {userData.isEmailVerified && (
                  <span className="ml-2 text-green-600">✓</span>
                )}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Phone
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {userData.phone}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Date of Birth
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {new Date(userData.dob).toLocaleDateString()}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Gender
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {userData.gender.charAt(0).toUpperCase() + userData.gender.slice(1)}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Verification Status
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                {userData.isUserVerified? "Verified" : "Not Verified"}
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Subscription Status
              </p>
              <p className={`text-sm font-medium ${
                userData.subscriptionStatus === 'active' 
                  ? 'text-green-600' 
                  : 'text-yellow-600'
              }`}>
                {userData.subscriptionStatus.charAt(0).toUpperCase() + userData.subscriptionStatus.slice(1)}
              </p>
            </div>
          </div>
        </div>

        {/* <button
          onClick={openModal}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
        >
          Edit
        </button> */}
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
              <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
                <div className="px-2 pr-14">
                  <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                    Edit Personal Information
                  </h4>
                  <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
                    Update your details to keep your profile up-to-date.
                  </p>
                </div>
                <form className="flex flex-col" onSubmit={handleSave}>
                  <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
                    <div className="mt-7">
                      <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
                        Personal Information
                      </h5>
      
                      <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                        <div className="col-span-2 lg:col-span-1">
                          <Label>First Name</Label>
                          <Input type="text" defaultValue={userData.firstame} />
                        </div>
      
                        <div className="col-span-2 lg:col-span-1">
                          <Label>Last Name</Label>
                          <Input type="text" defaultValue={userData.lastname} />
                        </div>
      
                        <div className="col-span-2 lg:col-span-1">
                          <Label>Email Address</Label>
                          <Input 
                            type="text" 
                            defaultValue={userData.email} 
                            disabled={userData.isEmailVerified}
                          />
                          {userData.isEmailVerified && (
                            <p className="mt-1 text-xs text-green-600">Email is verified</p>
                          )}
                        </div>
      
                        <div className="col-span-2 lg:col-span-1">
                          <Label>Phone</Label>
                          <Input type="text" defaultValue={userData.phone} />
                        </div>
      
                        <div className="col-span-2 lg:col-span-1">
                          <Label>Date of Birth</Label>
                          <Input type="date" defaultValue={userData.dob} />
                        </div>
      
                        <div className="col-span-2 lg:col-span-1">
                          <Label>Gender</Label>
                          <Input type="text" defaultValue={userData.gender} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                    <Button size="sm" variant="outline" onClick={closeModal}>
                      Close
                    </Button>
                    <Button size="sm" type="submit">
                      Save Changes
                    </Button>
                  </div>
                </form>
              </div>
            </Modal>
    </div>
  );
}
