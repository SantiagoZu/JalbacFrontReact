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
import response from '../utils/demo/dataDevoluciones'
import responseDetalles from '../utils/demo/dataProductos'
import { Input2 } from '../components/Input';
import Swal from 'sweetalert2'

const response2 = response.concat([])

function Devoluciones() {
 
  const [pageTable2, setPageTable2] = useState(1)
  const [pageTable3, setPageTable3] = useState(1)

  const [dataTable2, setDataTable2] = useState([])
  const [dataTable3, setDataTable3] = useState([])

  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length
  const totalResults2 = response.length

  // pagination change control
  function onPageChangeTable2(p) {
    setPageTable2(p)
  }
  function onPageChangeTable3(p) {
    setPageTable3(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable2(response2.slice((pageTable2 - 1) * resultsPerPage, pageTable2 * resultsPerPage))
  }, [pageTable2])
  useEffect(() => {
    setDataTable3(responseDetalles.slice((pageTable3 - 1) * resultsPerPage, pageTable3 * resultsPerPage))
  }, [pageTable3])
  
//despliegue modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  /* Confirmación edición */

  const [isModalOpen2, setIsModalOpen2] = useState(false)

  function openModal2() {
    setIsModalOpen(false)
    setIsModalOpen2(true)
  }

  function closeModal2() {
    setIsModalOpen2(false)
  }


       /* Despliegue modal Crear pedido */
       const [isModalOpenCrearPedido, setIsModalOpenCrearPedido] = useState(false)

       function openModalCrearPedido() {
         setIsModalOpenCrearPedido(true)
       }
     
       function closeModalCrearPedido() {
         setIsModalOpenCrearPedido(false)
       }
/* Confirmación Creacion */

const [isModalOpen2CrearPedido, setIsModalOpen2CrearPedido] = useState(false)

function openModal2CrearPedido() {
  setIsModalOpenCrearPedido(false)
  setIsModalOpen2CrearPedido(true)
}

function closeModal2CrearPedido() {
  setIsModalOpen2CrearPedido(false)
}
  
    /* Despliegue modal ver detalle */
const [isModalOpenVerDetalle, setIsModalOpenVerDetalle] = useState(false)

function openModalVerDetalle() {
  setIsModalOpenVerDetalle(true)
}

function closeModalVerDetalle() {
  setIsModalOpenVerDetalle(false)
}

/* Confirmación edición */



  /* Confimarcion eliminacion */

  const [isModalOpen3, setIsModalOpen3] = useState(false)

  function openModal3() {
    setIsModalOpen3(true)
  }

  function closeModal3() {
    setIsModalOpen3(false)
  }
  const [cliente, cambiarCliente] = useState({ campo: '', valido: null });
  
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    cliente: /^[a-zA-ZÀ-ÿ\s]{1,25}$/, // Letras, numeros, guion y guion_bajo
    //fechaEntrega: new RegExp(new Date().toLocaleDateString("es-CO")), // Letras y espacios, pueden llevar acentos.
    
    //correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    //telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    //documento: /^\d{1,10}$/ // 7 a 14 numeros.
  }
  const comparaFechas = (fecha1) => {
    if(new Date(fecha1).toLocaleDateString() > new Date().toLocaleDateString("es-CO")){
   
      return true
    }
    else {
      
      return false
    }
  }

 const alertEditadoCorrecto = () => {
    Swal.fire({
      title: "Pedido editado correctamente",
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
          'El pedido se ha eliminado correctamente.',
          'success'
        )
      }
    })

  }

  const validacionFormulario = (e) => {
    e.preventDefault();
    if (cliente.valido === 'true'  && comparaFechas(document.getElementById("fechaEditar").value)  ) {
      
      cambiarFormularioValido(true);
      cambiarCliente({ campo: '', valido: null });

      alertEditadoCorrecto();

    } else {
      cambiarFormularioValido(false);
      alertEditadoIncorrecto();
    }
  }

  return (
    <>
      <PageTitle>Devoluciones</PageTitle>

      

      <SectionTitle>Tabla Devoluciones</SectionTitle>
      <div className="flex ml-auto mb-6">
      </div>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr >
            <TableCell>ID</TableCell>
              <TableCell>Fecha Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Fecha Entrega</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Detalles Producto</TableCell>
              <TableCell>Acciones</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable2.map((devolucion, i) => (
              <TableRow key={i}>
                <TableCell>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{devolucion.ID}</p>
                </TableCell>
                <TableCell>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{devolucion.FechaPedido}</p>
                </TableCell>
                <TableCell>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{devolucion.Cliente}</p>
                </TableCell>
                <TableCell>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{devolucion.FechaEntrega}</p>
                </TableCell>
                <TableCell>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{devolucion.Estado}</p>
                </TableCell>        
                <TableCell >
                  <Button layout="link"  className='ml-6 mr-6 pr-5' size="icon" aria-label="Edit" onClick={openModalVerDetalle}>
                      <SearchIcon className="w-5 h-5 ml-6" aria-hidden="true" />
                  </Button>
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
        <ModalHeader className='mb-3'>Editar pedido</ModalHeader>
        <ModalBody>          
            <Label className="mt-4">
              <span>Cliente</span>
              <Input2 placeholder={"ingrese un cliente"} className="mt-1" estado={cliente} type={"text"}  cambiarEstado={cambiarCliente} expresionRegular={expresiones.cliente} mensajeError={"El nombre no puede tener numeros"} />                
            </Label>

            <Label className="mt-4">
              <span>fecha Entrega</span>
              <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
              <input  className='block w-full pl-4 mt-1 mb-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input'  type="date"  id="fechaEditar" />       
                <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                </div>
              </div>
            </Label>
            <Label className="mt-4">
            <span>Estado</span>
              <Select className="mt-1">
                <option>En produccion</option>
                <option>Devuelto</option>
                <option>Entregado</option>
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
            <Button onClick={validacionFormulario}>Enviar</Button>
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
      </form>
      <form action='' onSubmit={validacionFormulario}> 
      <Modal isOpen={isModalOpenCrearPedido} onClose={closeModalCrearPedido}>
        <ModalHeader className='mb-3'>Crear pedido</ModalHeader>
        <ModalBody>          
            <Label className="mt-4">
              <Input2 placeholder={"ingrese un cliente"} className="mt-1" estado={cliente} type={"text"}  cambiarEstado={cambiarCliente} expresionRegular={expresiones.cliente} mensajeError={"El nombre no puede tener numeros"} />  
            </Label>

            <Label className="mt-4">
              <span>fecha Entrega</span>
              <div className="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400">
                <input
                  className="block w-full  mt-1 mb-3 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                  placeholder=""
                  type="date"
                  id="fechaEditar"
                />
                <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                </div>
              </div>
            </Label>
            <Label className="mt-4">
              <span>Estado</span>
              
              <Select className="mt-1">
                <option>En produccion</option>
                <option>Devuelto</option>
                <option>Entregado</option>
              </Select>
            </Label>
           
        </ModalBody>

        <ModalFooter>          
          <div className="hidden sm:block">
            <Button layout="outline" onClick={closeModalCrearPedido}>
              Cancelar
            </Button>
          </div>
          <div className="hidden sm:block">
            <Button onClick={validacionFormulario}>Enviar</Button>
          </div>

          <div className="block w-full sm:hidden">
            <Button block size="large" layout="outline" onClick={closeModalCrearPedido}>
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
      </form>
      <Modal isOpen={isModalOpen2CrearPedido} onClose={closeModal2CrearPedido}>
        <ModalHeader>Crear Pedido</ModalHeader>
        <ModalBody>
          ¡Registro exitoso!              
        </ModalBody>
        <ModalFooter>
          <div className="hidden sm:block" onClick={closeModal2CrearPedido}>
            <Button>Aceptar</Button>
          </div>          
          <div className="block w-full sm:hidden">
            <Button block size="large" onClick={closeModal2CrearPedido}>
              Aceptar
            </Button>
          </div>
        </ModalFooter>
      </Modal>
      
      <Modal isOpen={isModalOpenVerDetalle} onClose={closeModalVerDetalle}>
        <ModalHeader className='mb-3'> Pedido</ModalHeader>
        <ModalBody>          
        <TableContainer >
        <Table >
          <TableHeader>
            <tr >
              <TableCell>ID</TableCell>
              <TableCell>Nombre anillo</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Peso</TableCell>
              <TableCell>Tamaño anillo</TableCell>
              <TableCell>Tamaño piedra</TableCell>
              <TableCell>Material</TableCell>
              <TableCell>Modelo</TableCell>
              <TableCell>Detalle</TableCell>
              <TableCell>Informacion adicional</TableCell>
            </tr>
          </TableHeader>
          <TableBody className="w-12">
            {dataTable3.map((producto, i) => (
              <TableRow key={i}>
                <TableCell>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{producto.ID}</p>
                </TableCell>
                <TableCell>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{producto.nombre}</p>
                </TableCell>
                <TableCell>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{producto.tipo}</p>
                </TableCell>
                <TableCell>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{producto.peso}</p>
                </TableCell>
                <TableCell>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{producto.tamanoAnillo}</p>
                </TableCell>                
                <TableCell>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{producto.tamanoPiedra}</p>
                </TableCell>                
                <TableCell>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{producto.material}</p>
                </TableCell>                
                <TableCell>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{producto.modelo}</p>
                </TableCell>                
                <TableCell>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{producto.detalle}</p>
                </TableCell>                
                <TableCell>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{producto.informacion}</p>
                </TableCell>                
               
             
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>  
           
        </ModalBody>

        <ModalFooter>          
   
          <div className="block w-full sm:hidden">
            <Button block size="large" layout="outline" onClick={closeModalVerDetalle}>
              Cerrar
            </Button>
          </div>
      
        </ModalFooter>
      </Modal>

      <Modal isOpen={isModalOpen3} onClose={closeModal3}>
        <ModalHeader>Eliminar Pedido</ModalHeader>
        <ModalBody>
          Pedido eliminado correctamente.
        </ModalBody>
        <ModalFooter>                   
          <div className="hidden sm:block">
            <Button onClick={closeModal3}>Aceptar</Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large" onClick={closeModal3}>Aceptar</Button>
          </div>
        </ModalFooter>
      </Modal>
      
    </>
  )
}

export default Devoluciones
