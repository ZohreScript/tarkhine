import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import ReactLoading from 'react-loading';
import Logo from "../../public/icons/Logo-mob.svg";
import closeIcon from '../../public/icons/closeIcon.svg';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import Image from 'next/image';


const dialogBgStyle = 'fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm';
const dialogDivStyle = 'flex min-h-full items-center justify-center p-4 text-center';
const dialogPanelStyle = 'w-full mx-1 transform overflow-hidden rounded-lg bg-white align-middle shadow-xl transition-all md:w-[392px]';
const dialogTitleStyle = 'relative flex items-center justify-center px-6 py-4 mb-0 md:py-[21px]';
const dialogCloseButtonStyle = 'text-[#717171] absolute left-6';
const dialogInputStyle = 'w-full outline-none border border-[#353535] text-[#353535] text-sm rounded px-2 py-2.5 mb-5 md:text-base';
const dialogErrorStyle = 'text-[#C30000] text-xs mb-4 text-right';
const dialogButtonStyle = 'w-full py-2.5 bg-[#EDEDED] text-sm rounded mb-6 text-[#CBCBCB] md:text-base md:mb-6 duration-500';

interface SignUpProps {
  isOpen: boolean;
  closeModal: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ isOpen, closeModal }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      closeModal();
      setIsLoading(false);
    }, 2500);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={dialogBgStyle} />
        </TransitionChild>
        <div className="fixed inset-0 overflow-y-auto">
          <div className={dialogDivStyle}>
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className={dialogPanelStyle}>
                <DialogTitle className={dialogTitleStyle}>
                  <span className="md:scale-110">
                  <Image src={Logo.src} width={155} height={51} alt="Logo" />
                  </span>
                  <button
                    onClick={closeModal}
                    className={dialogCloseButtonStyle}
                  >
                            <Image src={closeIcon.src} alt="close" width={24} height={24} color='#000'/>

                  </button>
                </DialogTitle>
                <div className="px-7">
                  <p className="mb-4 md:text-lg md:mb-5">ورود/ثبت نام</p>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      className={dialogInputStyle}
                    />
                    <span className="text-[#353535] text-xs absolute bg-white right-2 -top-2 px-1">
                      نام و نام خانوادگی
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      dir="ltr"
                      name="phoneNumber"
                      className={dialogInputStyle}
                    />
                    <span className="text-[#353535] text-xs absolute bg-white right-2 -top-2 px-1">
                      شماره همراه
                    </span>
                  </div>
                  <button
                    onClick={handleClick}
                    type="submit"
                    className={dialogButtonStyle}
                  >
                    {isLoading ? (
                      <>
                        <ReactLoading
                          type="bubbles"
                          color="#FFFFFF"
                          height={20}
                          width={25}
                          className="md:hidden mx-auto"
                        />
                        <ReactLoading
                          type="bubbles"
                          color="#FFFFFF"
                          height={24}
                          width={25}
                          className="hidden md:block mx-auto"
                        />
                      </>
                    ) : (
                      "ادامه"
                    )}
                  </button>
                  <p
                    className="text-[10px] mb-6 text-[#353535] md:text-xs md:mb-7"
                    onClick={closeModal}
                  >
                    ورود و عضویت در ترخینه به منزله قبول{" "}
                    <Link href="/rules" className="text-[#417F56]">
                      قوانین و مقررات
                    </Link>{" "}
                    است.
                  </p>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export { SignUp };
