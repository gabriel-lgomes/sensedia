"use client";
import Checkbox from "../Checkbox/Checkbox";
import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import { IFormUser } from "@/app/interfaces/FormUser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateUser } from "@/app/hooks/useCreateUser";
import Button from "../Button/Button";
import { IUser } from "@/app/interfaces/User";

interface FormProps {
  onSuccess?: () => void;
}

export default function Form({ onSuccess }: FormProps) {
  const { mutateAsync: createUser, isPending } = useCreateUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormUser>();

  const onSubmit = async (data: IFormUser) => {
    const password = Math.random().toString(36).slice(-8);

    const newUser = {
      email: data.email,
      name: data.name,
      password,
    };

    try {
      await createUser(newUser as Omit<IUser, "id">);
      toast.success(`Usuário ${data.name} criado com sucesso!`, {
        position: "top-right",
        autoClose: 3000,
      });
      reset();
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error(error);
      toast.error("Falha ao criar o usuário!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="border border-gray-25 rounded-lg px-6 py-8">
      <p className="text-gray-50 uppercase text-sm">Registro</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Input
            placeholder="Nome completo*"
            type="text"
            {...register("name", {
              required: "Nome do usuário é obrigatório",
            })}
            error={errors.name?.message as string}
          />
          <Input
            placeholder="Cidade*"
            type="text"
            {...register("city", {
              required: "Cidade é obrigatória",
            })}
            error={errors.city?.message as string}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          <Input
            placeholder="E-mail*"
            type="email"
            {...register("email", {
              required: "E-mail é obrigatório",
            })}
            error={errors.email?.message as string}
          />
          {/* Semana - Checkbox */}
          <div className="mt-1">
            <p className="text-gray-50 text-sm uppercase">Dias da semana</p>
            <div className="mt-2 grid lg:grid-cols-5 grid-cols-3 gap-y-4">
              <Checkbox label="Seg" />
              <Checkbox label="Ter" />
              <Checkbox label="Qua" />
              <Checkbox label="Qui" />
              <Checkbox label="Sex" />
              <Checkbox label="Sab" />
              <Checkbox label="Dom" />
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button type="submit" typeButton="primary" disabled={isPending}>
            {isPending ? "Salvando..." : "Registrar"}
          </Button>
          <Button type="submit" typeButton="secondary" onClick={() => reset()}>
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
}
