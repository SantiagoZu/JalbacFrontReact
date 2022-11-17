import React, { useState, useEffect } from 'react'

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
import { EditIcon, TrashIcon } from '../icons';

import response from '../utils/demo/dataPedidos'
const response2 = response.concat([])

function Roles() {
 
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

  return (
    <>
      <PageTitle>Pedidos</PageTitle>

     

      <SectionTitle>Tabla pedidos</SectionTitle>
      <div className="flex ml-auto mb-6">
        <Button>
          Crear Pedido
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
              <TableCell>Fecha Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Fecha Entrega</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Detalles Producto</TableCell>
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
                    <p className="text-xs text-gray-600 dark:text-gray-400">{empleado.FechaPedido}</p>
                </TableCell>
                <TableCell>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{empleado.Cliente}</p>
                </TableCell>
                <TableCell>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{empleado.FechaEntrega}</p>
                </TableCell>
                <TableCell>
                  <Badge type={empleado.status}>{empleado.Estado}</Badge>
                </TableCell>
                <TableCell>
                  <Badge type={empleado.status}>Ver Detalle</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Button layout="link" size="icon" aria-label="Edit">
                      <EditIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                    <Button layout="link" size="icon" aria-label="Delete">
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
    </>
  )
}

export default Roles
