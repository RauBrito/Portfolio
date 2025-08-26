"use client";

import React, { useCallback } from "react";
import { Input, Textarea, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

import { ContactFormProps } from "@/components/contact/types";
import { useContactForm } from "@/hooks/use-contact-form";
import { SuccessMessage } from "@/components/contact/contact-form/success-message";

export const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  isSubmitting,
  isSuccess,
  onReset,
}) => {
  const {
    formData,
    errors,
    isValid,
    handleInputChange,
    resetForm,
    validateField,
  } = useContactForm();

  const handleFormSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(formData); // Pass formData directly to the onSubmit prop
    },
    [formData, onSubmit],
  );

  const handleReset = useCallback(() => {
    resetForm();
    onReset();
  }, [resetForm, onReset]);

  const handleInputBlur = useCallback(
    (field: keyof typeof formData, value: string) => {
      validateField(field, value);
    },
    [validateField],
  );

  if (isSuccess) {
    return (
      <AnimatePresence mode="wait">
        <SuccessMessage onReset={handleReset} />
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.form
        noValidate
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
        exit={{ opacity: 0, y: -20 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onSubmit={handleFormSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            isRequired
            errorMessage={errors.name}
            isInvalid={!!errors.name}
            label="Nombre"
            name="name"
            placeholder="Nombre completo"
            startContent={<Icon icon="lucide:user" />}
            value={formData.name}
            variant="bordered"
            onBlur={() => handleInputBlur("name", formData.name)}
            onValueChange={(value) => handleInputChange("name", value)}
          />

          <Input
            isRequired
            errorMessage={errors.email}
            isInvalid={!!errors.email}
            label="Correo"
            name="email"
            placeholder="correo@ejemplo.com"
            startContent={<Icon icon="lucide:mail" />}
            type="email"
            value={formData.email}
            variant="bordered"
            onBlur={() => handleInputBlur("email", formData.email)}
            onValueChange={(value) => handleInputChange("email", value)}
          />
        </div>

        <Input
          isRequired
          errorMessage={errors.subject}
          isInvalid={!!errors.subject}
          label="Asunto"
          name="subject"
          placeholder="Tipo de proyecto o tema de consulta"
          startContent={<Icon icon="lucide:briefcase" />}
          value={formData.subject}
          variant="bordered"
          onBlur={() => handleInputBlur("subject", formData.subject)}
          onValueChange={(value) => handleInputChange("subject", value)}
        />

        <Textarea
          isRequired
          errorMessage={errors.message}
          isInvalid={!!errors.message}
          label="Mensaje"
          maxRows={8}
          minRows={4}
          name="message"
          placeholder="Cuéntame sobre tu proyecto, cronograma y requisitos específicos..."
          value={formData.message}
          variant="bordered"
          onBlur={() => handleInputBlur("message", formData.message)}
          onValueChange={(value) => handleInputChange("message", value)}
        />

        <div className="flex flex-col gap-4">
          <Button
            aria-label="Enviando"
            className="w-full h-14 text-base font-medium"
            color="primary"
            isDisabled={!isValid || isSubmitting}
            isLoading={isSubmitting}
            size="lg"
            startContent={
              !isSubmitting && (
                <Icon className="flex-shrink-0 text-lg" icon="lucide:send" />
              )
            }
            type="submit"
          >
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </Button>

          <Button
            aria-label="Reiniciar Formulario"
            className="w-full h-14 text-base"
            color="default"
            isDisabled={isSubmitting}
            size="lg"
            startContent={
              <Icon
                className="flex-shrink-0 text-lg"
                icon="lucide:refresh-cw"
              />
            }
            variant="bordered"
            onPress={resetForm}
          >
            Reiniciar Formulario
          </Button>
        </div>
      </motion.form>
    </AnimatePresence>
  );
};
