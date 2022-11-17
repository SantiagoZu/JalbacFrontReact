import React, { useState, useEffect } from 'react'

import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'
import { Modal, ModalHeader, ModalBody, ModalFooter,   } from '@windmill/react-ui';
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import CTA from '../components/CTA'
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
import { EditIcon, TrashIcon, MailIcon, OutlinePersonIcon } from '../icons';

import response from '../utils/demo/dataClientes'

const response2 = response.concat([])

function Clientes() {
 
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

  const [isModalOpen, setIsModalOpen] = useState(false)

    function openModal() {
      setIsModalOpen(true)
    }
  
    function closeModal() {
      setIsModalOpen(false)
    }

    // VALIDACIÓN 
  
    const [isModalOpen2, setIsModalOpen2] = useState(false)

    function openModal2() {
      setIsModalOpen(false)
      setIsModalOpen2(true)
    }

    function closeModal2() {
      setIsModalOpen2(false)
    }

    // ELIMINAR

    const [isModalOpen3, setIsModalOpen3] = useState(false)

    function openModal3() {
      setIsModalOpen3(true)
    }

    function closeModal3() {
      setIsModalOpen3(false)
    }

    // VALIDAR ELIMINAR

    const [isModalOpen4, setIsModalOpen4] = useState(false)

    function openModal4() {
      setIsModalOpen3(false)
      setIsModalOpen4(true)
    }

    function closeModal4() {
      setIsModalOpen4(false)
    }

  return (
    
    <>
      <PageTitle>Clientes</PageTitle>

      

      <SectionTitle>Tabla clientes</SectionTitle>
      <div className="flex ml-auto mb-6">
        <Button className="bg-blue-600" onClick={openModal}>
          Crear Cliente
          <span className="ml-2" aria-hidden="true">
            +
          </span>
        </Button>
      </div>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr >
              <TableCell>ID</TableCell>
              <TableCell>Documento</TableCell>
              <TableCell>Correo</TableCell>
              <TableCell>Nombres</TableCell>
              <TableCell>Apellidos</TableCell>
              <TableCell>Telefono</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Acciones</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable2.map((cliente, i) => (
              <TableRow key={i}>
                <TableCell>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{cliente.ID}</p>
                </TableCell>
                <TableCell>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{cliente.Documento}</p>
                </TableCell>
                <TableCell>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{cliente.Correo}</p>
                </TableCell>
                <TableCell>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{cliente.Nombre}</p>
                </TableCell>
                <TableCell>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{cliente.Apellidos}</p>
                </TableCell>
                <TableCell>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{cliente.Telefono}</p>
                </TableCell>
                
                <TableCell>
                  <Badge type={cliente.status} className='dark:border-yellow-200    '>{cliente.Estado}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Button layout="link" size="icon" aria-label="Edit">
                      <EditIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                    <Button layout="link" size="icon" aria-label="Delete">
                      <TrashIcon className="w-5 h-5" aria-hidden="true" onClick={openModal3}/>
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

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader className='mb-3'>Registrar cliente</ModalHeader>
        <ModalBody>          
            <Label>
              <span>Documento</span>
              {/* <!-- focus-within sets the color for the icon when input is focused --> */}
              <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                <input
                  className="block w-full pl-10 mt-1 mb-3 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                  placeholder="1002003004"
                />
                <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                </div>
              </div>
            </Label>

            <Label>
              <span>Correo</span>
              <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                <input
                  className="block w-full pl-10 mt-1 mb-3 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                  placeholder="ej13@mail.com"
                />
                <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                </div>
              </div>
            </Label>

            <Label>
              <span>Nombres</span>
              <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                <input
                  className="block w-full pl-10 mt-1 mb-3 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                  placeholder="Josué"
                />
                <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                </div>
              </div>
            </Label>

            <Label>
              <span>Apellidos</span>
              <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                <input
                  className="block w-full pl-10 mt-1 mb-3 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                  placeholder="Barreto"
                />
                <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                </div>
              </div>
            </Label>

            <Label>
              <span>Telefono</span>
              <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                <input
                  className="block w-full pl-10 mt-1 mb-3 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                  placeholder="4488123"
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
            <Button onClick={openModal2}>Enviar</Button>
          </div>

          <div className="block w-full sm:hidden">
            <Button block size="large" layout="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large">
              Accept
            </Button>
          </div>
        </ModalFooter>
      </Modal>


      <Modal isOpen={isModalOpen2} onClose={closeModal2}>
        <ModalHeader>Registro cliente</ModalHeader>
        <ModalBody>
          ¡Registro exitoso!              
        </ModalBody>
        <ModalFooter>
          <div className="hidden sm:block" onClick={closeModal2}>
            <Button>Aceptar</Button>
          </div>          
          <div className="block w-full sm:hidden">
            <Button block size="large" onClick={closeModal2}>
              Aceptar
            </Button>
          </div>
        </ModalFooter>
      </Modal>

      <Modal isOpen={isModalOpen3} onClose={closeModal3}>
        <ModalHeader>Eliminar cliente</ModalHeader>
        <ModalBody>
          ¿Está seguro de que desea eliminar el cliente?
        </ModalBody>
        <ModalFooter>          
          <div className="hidden sm:block">
            <Button layout="outline" onClick={closeModal3}>
              Cancelar
            </Button>
          </div>
          <div className="hidden sm:block">
            <Button onClick={openModal4}>Aceptar</Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large" layout="outline" onClick={closeModal3}>
              Cancelar
            </Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large" onClick={openModal4}>Aceptar</Button>
          </div>
        </ModalFooter>
      </Modal>

      <Modal isOpen={isModalOpen4} onClose={closeModal4}>
        <ModalHeader>Eliminar cliente</ModalHeader>
        <ModalBody>
          Cliente eliminado correctamente.
        </ModalBody>
        <ModalFooter>                   
          <div className="hidden sm:block">
            <Button onClick={closeModal4}>Aceptar</Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large" onClick={closeModal4}>Aceptar</Button>
          </div>
        </ModalFooter>
      </Modal>
    </>    
  )
}

export default Clientes
