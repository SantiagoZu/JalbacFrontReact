import React, { useState } from 'react'

import { Modal, ModalHeader, ModalBody, ModalFooter, Button  } from '@windmill/react-ui';
import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'
import Swal from 'sweetalert2'
import { EditIcon } from '../../icons';
import { Input2 } from '../Input';


function CrearUsuario(){
    
    const [isModalOpen, setIsModalOpen] = useState(false)

    function openModal() {
        setIsModalOpen(true)
      }

    function closeModal() {
       setIsModalOpen(false)
    } 

    const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
    const [formularioValido, cambiarFormularioValido] = useState(null);

    const expresiones = {
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }
    
    const ValidacionFormulario = (e) => {
        e.preventDefault();
        if (correo.valido === 'true') {   

          cambiarFormularioValido(true);
          cambiarCorreo({ campo: '', valido: null });

          Swal.fire({
            title: "Usuario registrado correctamente",
            icon: "success"
          })
          .then((value) => {
            closeModal();
          })        
        } else {
          cambiarFormularioValido(false);
          Swal.fire({
            title: "Digíte correctamente el formulario",
            icon: "error"
          })
        }
      }    

    return (
        <>    
         <div>
            <Button onClick={openModal}>
                Crear Usuario
                <span className="ml-2" aria-hidden="true">
                    +
                </span>
            </Button>
          </div>  

          <form action='' onSubmit={ValidacionFormulario}>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <ModalHeader>Crear Usuario</ModalHeader>
                <ModalBody>
                <Label className="mt-4">
                <span>Usuario</span>
                <Select className="mt-1">
                    <option>Administrador</option>
                    <option>Empleado</option>
                </Select>
                </Label>

                <Label className="mt-4">
                <span>Correo</span>
                <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                    <Input2
                    className="block w-full pl-10 mt-1 mb-3 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="example@gmail.com" estado={correo} cambiarEstado={cambiarCorreo} expresionRegular={expresiones.correo} mensajeError={"Digíte el correo correctamente"} 
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
                <div className="hidden sm:block">
                    <Button layout="outline" onClick={closeModal}>
                    Cancelar
                    </Button>
                </div>
                <div className="hidden sm:block">
                    <Button type="submit" onClick={ValidacionFormulario}>Aceptar</Button>
                </div>              
                </ModalFooter>
            </Modal>
          </form>
        </>
      )
}

function EditarUsuario(){    
    
    const [isModalOpen, setIsModalOpen] = useState(false)

    function openModal() {
        setIsModalOpen(true)
      }

    function closeModal() {
       setIsModalOpen(false)
    } 

    const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
    const [formularioValido, cambiarFormularioValido] = useState(null);

    const expresiones = {
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }
    
    const ValidacionFormulario = (e) => {
        e.preventDefault();
        if (correo.valido === 'true') {   

          cambiarFormularioValido(true);
          cambiarCorreo({ campo: '', valido: null });

          Swal.fire({
            title: "Usuario editado correctamente",
            icon: "success"
          })
          .then((value) => {
            closeModal();
          })        
        } else {
          cambiarFormularioValido(false);
          Swal.fire({
            title: "Digíte correctamente el formulario",
            icon: "error"
          })
        }
      }    

    return (
        <>    
          <div>
          <Button layout="link" size="icon" aria-label="Edit" onClick={openModal}>
            <EditIcon className="w-5 h-5" aria-hidden="true" />
          </Button>
          </div>  
          <form action='' onSubmit={ValidacionFormulario}>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <ModalHeader>Editar Usuario</ModalHeader>
                <ModalBody>
                <Label className="mt-4">
                <span>Usuario</span>
                <Select className="mt-1">
                    <option>Administrador</option>
                    <option>Empleado</option>
                </Select>
                </Label>

                <Label className="mt-4">
                <span>Correo</span>
                <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                    <Input2
                    className="block w-full pl-10 mt-1 mb-3 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                    placeholder="example@gmail.com" estado={correo} cambiarEstado={cambiarCorreo} expresionRegular={expresiones.correo} mensajeError={"Digíte el correo correctamente"} 
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
                <div className="hidden sm:block">
                    <Button layout="outline" onClick={closeModal}>
                    Cancelar
                    </Button>
                </div>
                <div className="hidden sm:block">
                    <Button type="submit" onClick={ValidacionFormulario}>Aceptar</Button>
                </div>              
                </ModalFooter>
            </Modal>
          </form>
        </>
      )
}


function EliminarUsuario(){
    Swal.fire({
      title: '¿Seguro que deseas eliminar este usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7e3af2',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Eliminado!',
          'El usuario se ha eliminado correctamente.',
          'success'
        )
      }
    })
}

export { CrearUsuario, EliminarUsuario, EditarUsuario }
