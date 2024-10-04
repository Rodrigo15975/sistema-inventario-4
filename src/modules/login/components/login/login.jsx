import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import logo from '@/modules/login/img/logo.png'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { SiSimplelogin } from 'react-icons/si'
import { inputs } from './input'
import { formSchema } from './control-schema'
import PortadaLogin from './portadaLogin'

const Login = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <section className="gradient-form container mx-auto min-h-screen flex items-center justify-center">
        <div className=" w-full py-4">
          <div className="flex lg:px-4 w-full flex-wrap items-center justify-center text-neutral-800 :text-neutral-200">
            <div className=" rounded-lg flex justify-center gap-8 w-full">
              <div className="g-0 lg:flex flex-[0_1_30rem] max-xl:flex-[0_1_50rem]  max-md:px-4 lg:flex-wrap">
                <div className="px-4 md:px-0 flex flex-col ring-1 ring-slate-500/40 rounded-md shadow justify-center items-center flex-[0_1_30rem]">
                  <div className="md:mx-6 md:p-12 max-lg:min-h-[80vh] max-lg:flex max-lg:justify-center max-lg:flex-col w-full">
                    <div className="text-center">
                      <img
                        className="mx-auto w-32 h-auto"
                        src={logo}
                        alt="logo"
                      />
                      <h4 className="mb-4 mt-1 pb-1 text-slate-500 text-4xl font-semibold">
                        Bienvenido
                      </h4>
                      <p className="mb-4 text-center font-light text-slate-500">
                        Por favor digite sus credenciales
                      </p>
                    </div>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="max-w-sm max-lg:w-full mx-auto"
                      >
                        <div className="flex flex-col gap-4 min-h-[22.5vh]">
                          {inputs.map((input, index) => (
                            <FormField
                              key={index}
                              control={form.control}
                              name={input.name}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>{input.placeHolder}</FormLabel>
                                  <FormControl>
                                    <Input
                                      className=""
                                      type={input.type}
                                      placeholder={input.placeHolder}
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>

                        <div className="mb-12 pb-1 pt-1 mt-8 space-y-6 text-center">
                          <div>
                            <Button
                              type="submit"
                              className="w-full hover:bg-primary/10 hover:text-primary flex gap-2 items-center h-[2.5rem] bg-gradient-to-r from-slate-500 to-slate-500"
                            >
                              Ingresar
                              <SiSimplelogin className="text-xl" />
                            </Button>
                          </div>
                          <div>
                            <a
                              href="#!"
                              className="text-slate-500 underline underline-offset-2 hover:text-slate-800 transition font-light"
                            >
                              Olvidaste la contraseña?
                            </a>
                          </div>
                        </div>
                      </form>
                    </Form>
                  </div>
                </div>
              </div>
              {/* Imagen portada login */}
              <PortadaLogin />
              {/* ----------- */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
