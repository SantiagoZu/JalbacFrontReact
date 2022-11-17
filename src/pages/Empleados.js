import React, { useState, useEffect } from 'react'

import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'
import { Modal, ModalHeader, ModalBody, ModalFooter, } from '@windmill/react-ui';
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import { MensajeErrorFormulario } from '../components/styles/styles';

import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Badge,
  Avatar,
  Button,
  Pagination,
} from '@windmill/react-ui'
import { EditIcon, TrashIcon } from '../icons';
import { SearchIcon } from '../icons'
import response from '../utils/demo/dataEmpleados'
import { Input2 } from '../components/Input';
import Swal from 'sweetalert2'
import { Alerta } from '../components/Alerta';

const response2 = response.concat([])

function Empleados() {

  const [pageTable2, setPageTable2] = useState(1)

  const [dataTable2, setDataTable2] = useState([])

  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChangeTable2(p) {
    setPageTable2(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable2(response2.slice((pageTable2 - 1) * resultsPerPage, pageTable2 * resultsPerPage))
  }, [pageTable2])

  /* Despliegue modal editar */
  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  /* Confimarcion eliminacion */

  const [isModalOpen3, setIsModalOpen3] = useState(false)

  function openModal3() {
    setIsModalOpen3(true)
  }

  function closeModal3() {
    setIsModalOpen3(false)
  }

  /* Validación formulario */

  const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
  const [apellido, cambiarApellido] = useState({ campo: '', valido: null });
  const [documento, cambiarDocumento] = useState({ campo: '', valido: null });
  const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,25}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    documento: /^\d{1,10}$/ // 7 a 14 numeros.
  }

  const alertEditadoCorrecto = () => {
    Swal.fire({
      title: "Empleado editado correctamente",
      icon: "success"
    })
      .then((value) => {
        closeModal();
      })
  }

  const alertEditadoIncorrecto = () => {
    Swal.fire({
      title: "Digíte correctamente el formulario",
      icon: "error"
    })

  }

  const alertEliminado = () => {
    Swal.fire({
      title: '¿Estás seguro que deseas eliminar el empleado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Eliminado!',
          'El empleado se ha eliminado correctamente.',
          'success'
        )
      }
    })

  }

  const validacionFormulario = (e) => {
    e.preventDefault();
    if (nombre.valido === 'true' && apellido.valido === 'true' && documento.valido === 'true' && correo.valido === 'true') {

      cambiarFormularioValido(true);
      cambiarNombre({ campo: '', valido: null });
      cambiarApellido({ campo: '', valido: null });
      cambiarDocumento({ campo: '', valido: null });
      cambiarCorreo({ campo: '', valido: null });

      alertEditadoCorrecto();

    } else {
      cambiarFormularioValido(false);
      alertEditadoIncorrecto();
    }
  }
  
  return (
    <>
      <PageTitle>Empleados</PageTitle>



      <SectionTitle>Tabla empleados</SectionTitle>

      <div className="flex ml-auto mb-6">
        <div className="flex justify-center flex-1 ml-5">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <SearchIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <Input
              className="pl-8 text-gray-700"
              placeholder="Buscar usuario"
            />
          </div>
        </div>
      </div>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr >
              <TableCell>ID</TableCell>
              <TableCell>Usuario</TableCell>
              <TableCell>Rol</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellidos</TableCell>
              <TableCell>Documento</TableCell>
              <TableCell>Correo</TableCell>
              <TableCell>Cargo</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Acciones</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable2.map((empleado, i) => (
              <TableRow key={i}>
                <TableCell>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{empleado.ID}</p>
                </TableCell>
                <TableCell>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{empleado.Usuario}</p>
                </TableCell>
                <TableCell>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{empleado.Rol}</p>
                </TableCell>
                <TableCell>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{empleado.Nombre}</p>
                </TableCell>
                <TableCell>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{empleado.Apellidos}</p>
                </TableCell>
                <TableCell>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{empleado.Documento}</p>
                </TableCell>
                <TableCell>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{empleado.Correo}</p>
                </TableCell>
                <TableCell>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{empleado.Cargo}</p>
                </TableCell>
                <TableCell>
                  <p className="text-xs text-gray-600 dark:text-gray-400" type={empleado.status}>{empleado.Estado}</p>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Button layout="link" size="icon" aria-label="Edit" onClick={openModal}>
                      <EditIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                    <Button layout="link" size="icon" aria-label="Delete" onClick={alertEliminado}>
                      <TrashIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable2}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>

      <form action='' onSubmit={validacionFormulario}>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalHeader className='mb-3'>Editar empleado</ModalHeader>
          <ModalBody>
            <Label className="mt-4">
              <span>Rol</span>
              <Select className="mt-1">
                <option>Seleccionar...</option>
                <option>Administrador</option>
                <option>Empleado</option>
              </Select>
            </Label>

            <Label className="mt-4">
              <span>Nombre</span>
              <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                <Input2 placeholder="Nombre" type="text" estado={nombre} cambiarEstado={cambiarNombre} expresionRegular={expresiones.nombre} mensajeError={"Digíte el nombre correctamente"} />
              </div>
            </Label>
            <Label className="mt-4">
              <span>Apellido</span>
              <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                <Input2 placeholder="Apellido" type="text" estado={apellido} cambiarEstado={cambiarApellido} expresionRegular={expresiones.nombre} mensajeError={"Digíte el apellido correctamente"} />
              </div>
            </Label>
            <Label className="mt-4">
              <span>Documento</span>
              <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                <Input2 placeholder="Documento" type="number" estado={documento} cambiarEstado={cambiarDocumento} expresionRegular={expresiones.documento} mensajeError={"Digíte el documento correctamente"} />
                <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                </div>
              </div>
            </Label>
            <Label className="mt-4">
              <span>Correo</span>
              <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                <Input2 placeholder="Correo" type="email" estado={correo} cambiarEstado={cambiarCorreo} expresionRegular={expresiones.correo} mensajeError={"Digíte el correo correctamente"} />
                <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                </div>
              </div>
            </Label>

            <Label className="mt-4">
              <span>Cargo</span>
              <Select className="mt-1">
                <option>Seleccionar...</option>
                <option>Vaceador</option>
                <option>Diseñador 3D</option>
                <option>Terminador a mano</option>
              </Select>
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
              <Button type="submit" onClick={validacionFormulario}>Enviar</Button>
            </div>

            <div className="block w-full sm:hidden">
              <Button block size="large" layout="outline" onClick={closeModal}>
                Cancel
              </Button>
            </div>
            <div className="block w-full sm:hidden">
              <Button block size="large" type='submit'>
                Accept
              </Button>
            </div>
          </ModalFooter>
        </Modal>
      </form>
    </>
  )
}

export default Empleados
