import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { formSchema } from './schema'
import { inputNewUsuario } from './input-new-usuario'
import { IoMdPersonAdd } from 'react-icons/io'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const NewUsuario = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      role: 'ADMIN',
      username: '',
    },
  })

  const onSubmit = (data) => {
    console.log(data)
    form.reset()
    form.setValue('role', 'ADMIN')
  }

  return (
    <>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-3xl text-primary">
            Creando nuevo usuario
          </DialogTitle>
          <DialogDescription>Nuevo usuario para el sistema</DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {inputNewUsuario.slice(0, 3).map((input, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 items-center gap-4"
                >
                  <FormField
                    control={form.control}
                    name={input.name}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{input.text}</FormLabel>
                        <FormControl>
                          <Input placeholder={input.text} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
              {inputNewUsuario.slice(3, 4).map((input, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 items-center gap-4"
                >
                  <FormField
                    control={form.control}
                    name={input.name}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{input.text}</FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={(value) => field.onChange(value)} // Asignamos el valor seleccionado al campo del formulario
                          >
                            <SelectTrigger
                              className="focus:bg-white text-primary font-medium border-none outline-none shadow transition-all rounded w-full border-b bg-secondary"
                              {...field}
                            >
                              <SelectValue placeholder="ADMIN" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Role</SelectLabel>
                                <SelectItem value="ADMIN">Admin</SelectItem>
                                <SelectItem value="EMPLOYEE">
                                  Employee
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
              <DialogFooter>
                <Button className="bg-primary/80 gap-2" type="submit">
                  Crear Usuario
                  <IoMdPersonAdd />
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </>
  )
}

export default NewUsuario
