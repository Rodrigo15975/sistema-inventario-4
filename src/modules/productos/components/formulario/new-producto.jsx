import { Button } from "@/components/ui/button"
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import {
  Form
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { IoMdPersonAdd } from "react-icons/io"
import { MdOutlineProductionQuantityLimits } from "react-icons/md";


const NewProduct = () => {
  const form = useForm({
    // resolver: zodResolver(),
    defaultValues: {
      email: "",
      password: "",
      role: "ADMIN",
      username: "",
    },
  })

  const onSubmit = (data) => {
    console.log(data)
    form.reset()
    form.setValue("role", "ADMIN")
  }

  return (
    <>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-3xl text-primary">
            Creando nuevo producto
          </DialogTitle>
          <DialogDescription>Registrando nuevo producto</DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <DialogFooter>
                <Button className="bg-primary/80 gap-2" type="submit">
                  Crear producto
                  <MdOutlineProductionQuantityLimits />

                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </>
  )
}

export default NewProduct
