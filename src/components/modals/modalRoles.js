import React, { useState } from 'react'

import { Modal, ModalHeader, ModalBody, ModalFooter, Button  } from '@windmill/react-ui';
import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'
import Swal from 'sweetalert2'
import { EditIcon } from '../../icons';


function CrearRol(){

    const [isModalOpen, setIsModalOpen] = useState(false)

    function openModal() {
        setIsModalOpen(true)
      }

    function closeModal() {
       setIsModalOpen(false)
    } 

    return (
        <>    
          <div>
            <Button onClick={openModal}>
                Crear Rol
                <span className="ml-2" aria-hidden="true">
                    +
                </span>
            </Button>
          </div>  
    
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <ModalHeader>Registrar rol</ModalHeader>
            <ModalBody>
            <Label className="mt-4">
              <span>Rol</span>
              <Select className="mt-1">
                <option>Administrador</option>
                <option>Empleado</option>
              </Select>
            </Label>

            <Label className="mt-4">
              <span>Permisos</span>
              <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                <input
                  className="block w-full pl-10 mt-1 mb-3 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                  placeholder=""
                />
                <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                </div>
              </div>
            </Label>

            <Label className="mt-4">
              <span>Estado</span>
              <Select className="mt-1">
                <option>Activo</option>
                <option>Inactivo</option>
              </Select>
            </Label>
            </ModalBody>
            <ModalFooter>
              {/* I don't like this approach. Consider passing a prop to ModalFooter
               * that if present, would duplicate the buttons in a way similar to this.
               * Or, maybe find some way to pass something like size="large md:regular"
               * to Button
               */}
              <div className="hidden sm:block">
                <Button layout="outline" onClick={closeModal}>
                  Cancelar
                </Button>
              </div>
              <div className="hidden sm:block">
                <Button>Aceptar</Button>
              </div>
              <div className="block w-full sm:hidden">
                <Button block size="large" layout="outline" onClick={closeModal}>
                Cancelar
                </Button>
              </div>
              <div className="block w-full sm:hidden">
                <Button block size="large">
                Aceptar
                </Button>
              </div>
            </ModalFooter>
          </Modal>
        </>
      )
}

function EditarRol(){    
    
    const [isModalOpen, setIsModalOpen] = useState(false)

    function openModal() {
        setIsModalOpen(true)
      }

    function closeModal() {
       setIsModalOpen(false)
    } 

    return (
        <>    
          <div>
          <Button layout="link" size="icon" aria-label="Edit" onClick={openModal}>
            <EditIcon className="w-5 h-5" aria-hidden="true" />
          </Button>
          </div>  
    
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <ModalHeader>Editar rol</ModalHeader>
            <ModalBody>
            <Label className="mt-4">
              <span>Rol</span>
              <Select className="mt-1">
                <option>Administrador</option>
                <option>Empleado</option>
              </Select>
            </Label>

            <Label className="mt-4">
              <span>Permisos</span>
              <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                <input
                  className="block w-full pl-10 mt-1 mb-3 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                  placeholder=""
                />
                <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                </div>
              </div>
            </Label>

            <Label className="mt-4">
              <span>Estado</span>
              <Select className="mt-1">
                <option>Activo</option>
                <option>Inactivo</option>
              </Select>
            </Label>
            </ModalBody>
            <ModalFooter>
              {/* I don't like this approach. Consider passing a prop to ModalFooter
               * that if present, would duplicate the buttons in a way similar to this.
               * Or, maybe find some way to pass something like size="large md:regular"
               * to Button
               */}
              <div className="hidden sm:block">
                <Button layout="outline" onClick={closeModal}>
                  Cancelar
                </Button>
              </div>
              <div className="hidden sm:block">
                <Button>Aceptar</Button>
              </div>
              <div className="block w-full sm:hidden">
                <Button block size="large" layout="outline" onClick={closeModal}>
                Cancelar
                </Button>
              </div>
              <div className="block w-full sm:hidden">
                <Button block size="large">
                Aceptar
                </Button>
              </div>
            </ModalFooter>
          </Modal>
        </>
      )
}


function EliminarRol(){
    Swal.fire({
      title: '¿Seguro que deseas eliminar este rol?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7e3af2',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Eliminado!',
          'El rol se ha eliminado correctamente.',
          'success'
        )
      }
    })
}

export { CrearRol, EliminarRol, EditarRol }
