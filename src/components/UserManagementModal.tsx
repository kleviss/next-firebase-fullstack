"use client"
import React from "react";
import { Label, TextInput, Select, Button, Modal, Radio } from 'flowbite-react';

interface UserManagementModalProps {
  openModal: string | undefined;
  setOpenModal: React.Dispatch<React.SetStateAction<string | undefined>>;
  email: string;
  accessLevel: number;
  hasPremium: boolean;
}

const UserManagementModal = ({ openModal, setOpenModal, email, accessLevel, hasPremium }: UserManagementModalProps) => {
  const props = { openModal, setOpenModal, email, accessLevel, hasPremium };

  console.log("props: ", props.hasPremium);

  return (
    <>
      <Modal
        dismissible
        show={props.openModal === 'dismissible'}
        onClose={() => props.setOpenModal(undefined)}
        className="h-screen overflow-hidden"
      >
        <Modal.Header>Edit user</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Zgjidh nje nga opsionet e meposhtme per te ndryshuar te dhenat e perdoruesit.
            </p>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="email3" value="Email:" />
              </div>
              <TextInput
                helperText={<>Emaili nuk mund te modifikohet. Për te fshirë përdoruesin <a className="ml-1 font-medium text-red-600 hover:underline dark:text-cyan-500" href="/forms">kliko këtu</a>.</>}
                id="email3"
                placeholder="email@visionfx.com"
                required
                type="email"
                disabled={true}
                value={props.email}
              />
            </div>
            <div className="max-w-md" id="select">
              <div className="mb-2 block">
                <Label htmlFor="countries" value="Access Level:" />
              </div>
              <Select id="countries" required value={props.accessLevel.toString()}>
                <option>0</option>
                <option>6</option>
                <option>10</option>
              </Select>
            </div>
            <fieldset className="flex max-w-md flex-col gap-4" id="radio">
              <legend className="mb-4">
                <div className="mb-2 block">
                  <Label htmlFor="email3" value="Has Premium:" />
                </div>
              </legend>
              <div className="flex items-center gap-2">
                <Radio
                  id="yes"
                  name="yesno"
                  value="Yes"
                  checked={props.hasPremium}
                />
                <Label htmlFor="united-state">Yes</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio
                  id="no"
                  name="yesno"
                  value="No"
                  checked={!props.hasPremium}

                />
                <Label htmlFor="united-state">No</Label>
              </div>
            </fieldset>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.setOpenModal(undefined)}>Ruaje</Button>
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserManagementModal;
