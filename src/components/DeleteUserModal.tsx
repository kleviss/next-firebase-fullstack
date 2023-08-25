'use client';

import { Button, Modal } from 'flowbite-react';
import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const DeleteUserModal = ({ openModal, setOpenModal }: { openModal: string | undefined, setOpenModal: React.Dispatch<React.SetStateAction<string | undefined>> }) => {
  const props = { openModal, setOpenModal };

  return (
    <>
      <Modal show={props.openModal === 'pop-up'} size="md" popup onClose={() => props.setOpenModal(undefined)} className="h-screen overflow-hidden">
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Je i sigurt qe doni ta fshini kete person?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => props.setOpenModal(undefined)}>
                Po, pra
              </Button>
              <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
                Jo, jo, mfal
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default DeleteUserModal;


