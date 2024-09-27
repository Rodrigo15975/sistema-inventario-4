import React from "react"
import NewCategoria from "../formulario/new-categoria"
import { MdOutlineProductionQuantityLimits } from "react-icons/md"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Tooltip } from "primereact/tooltip"
import { Input } from "@/components/ui/input"
import { CiViewList } from "react-icons/ci"
import { FaListAlt } from "react-icons/fa";

const TableHeader = () => {
  return (
    <>
      <div className="bg-white pr-4 shadow ring-gray-900/10">
        <div className="flex justify-between border-b">
          <div>
            <h1 className="font-light  flex items-center gap-2 p-4 rounded text-primary/80">
              Lista de categorias <CiViewList />
            </h1>
          </div>
          <div className="flex items-center flex-[0_1_10rem]">
            <Tooltip position="top" target=".new-categoria">
              Nuevo categoria
            </Tooltip>
            <Dialog>
              <DialogTrigger className="new-categoria font-light rounded-md items-center transition-all flex-[0_1_10rem] h-10 flex justify-center w-full shadow ring-1 bg-neutral-700 text-white ring-neutral-50">
                <FaListAlt  className="text-2xl" />
              </DialogTrigger>
              <NewCategoria />
            </Dialog>
          </div>
        </div>
        <div className="flex items-center p-4 bg-white">
          <Input
            placeholder="Buscar..."
            className="flex-[0_1_15rem]  bg-white"
          />
        </div>
      </div>
    </>
  )
}

export default TableHeader
