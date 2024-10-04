import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Tooltip } from 'primereact/tooltip'
import { CiViewList } from 'react-icons/ci'
import NewProveedor from '../formulario/new-proveedor'
import { AiOutlineContainer } from "react-icons/ai";

const TableHeader = () => {
  return (
    <div className="bg-white max-md:p-3 pr-4 shadow ring-gray-900/10">
      <div className="flex justify-between border-b max-md:flex-wrap ">
        <div className=' max-md:flex-[0_1_100%] max-md:order-1 max-md:flex max-md:justify-center'>
          <h1 className="font-light flex items-center gap-2 p-4 rounded  text-primary/80">
            Lista de proveedores <CiViewList />
          </h1>
        </div>
        <div className="flex items-center flex-[0_1_10rem] max-md:justify-end max-md:flex-[0_1_100%]">
          <Tooltip position="top" target=".new-user">
            Nuevo Proveedor
          </Tooltip>
          <Dialog >
          {/* button */}
            <DialogTrigger className="new-user font-light rounded-md items-center transition-all max-sm:flex-auto flex-[0_1_10rem] h-10 flex justify-center w-full shadow ring-1 bg-neutral-700 text-white ring-neutral-50">
              <AiOutlineContainer className="text-2xl" />
            </DialogTrigger>
            {/*  */}
            <NewProveedor />
          </Dialog>
        </div>
      </div>
      <div className="flex items-center p-4 bg-white">
        <Input placeholder="Buscar..." className="flex-[0_1_15rem]  bg-white" />
      </div>
    </div>
  )
}

export default TableHeader
