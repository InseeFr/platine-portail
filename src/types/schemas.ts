import { z } from "zod";
import { MailObjectEnum, type MailObjectType } from "./mailObjectEnum";

export const addressSchema = z
  .object({
    streetNumber: z
      .string()
      .nullish()
      .transform(val => (val === null ? "" : val)),
    repetitionIndex: z
      .string()
      .nullish()
      .transform(val => val ?? ""),
    streetType: z
      .string()
      .nullish()
      .transform(val => val ?? ""),
    streetName: z
      .string()
      .nullish()
      .transform(val => val ?? ""),
    addressSupplement: z
      .string()
      .nullish()
      .transform(val => val ?? ""),
    specialDistribution: z
      .string()
      .nullish()
      .transform(val => val ?? ""),
    cedexName: z
      .string()
      .nullish()
      .transform(val => val ?? ""),
    cedexCode: z
      .string()
      .nullish()
      .transform(val => val ?? ""),
    cityName: z
      .string()
      .nullish()
      .transform(val => val ?? ""),
    zipCode: z
      .string()
      .nullish()
      .transform(val => val ?? ""),
    countryName: z
      .string()
      .nullish()
      .transform(val => (val === null ? "" : val)),
  })
  .superRefine(({ cedexCode, zipCode, cityName, cedexName }, refinementContext) => {
    if ((cedexCode === undefined || cedexCode === "") && (zipCode === undefined || zipCode === "")) {
      refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Code cedex ou code postal requis",
        path: ["zipCode"],
      });
      return refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Code cedex ou code postal requis",
        path: ["cedexCode"],
      });
    }

    if (cedexCode && cedexCode !== "" && zipCode && zipCode !== "") {
      refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Impossible de remplir code postal et code cedex",
        path: ["zipCode"],
      });
      return refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Impossible de remplir code postal et code cedex",
        path: ["cedexCode"],
      });
    }

    if (cedexName && cedexName !== "" && cityName && cityName !== "") {
      refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Impossible de remplir commune et bureau distributeur",
        path: ["cityName"],
      });
      return refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Impossible de remplir commune et bureau distributeur",
        path: ["cedexName"],
      });
    }

    if (cedexCode !== undefined && cedexCode !== "" && (cedexName === undefined || cedexName === "")) {
      return refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Champs requis",
        path: ["cedexName"],
      });
    }

    if (zipCode !== undefined && zipCode !== "" && (cityName === undefined || cityName === "")) {
      return refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Champs requis",
        path: ["cityName"],
      });
    }
  });

export const personnalInformationsSchema = z.object({
  civility: z.enum(["Female", "Male", "Undefined"]),
  lastName: z
    .string()
    .nullish()
    .transform(val => (val === null ? "" : val)),
  firstName: z
    .string()
    .nullish()
    .transform(val => (val === null ? "" : val)),
  function: z
    .string()
    .nullish()
    .transform(val => val ?? ""),
  email: z
    .string()
    .email({ message: "Veuillez saisir une adresse mail valide." })
    .or(z.literal(""))
    .nullish()
    .transform(val => (val === null ? "" : val)),
  phone: z
    .string()
    .nullish()
    .transform(val => val ?? ""),
  otherPhone: z
    .string()
    .nullish()
    .transform(val => (val === null ? "" : val)),
  identificationName: z
    .string()
    .nullish()
    .transform(val => (val === null ? "" : val)),
  usualCompanyName: z
    .string()
    .nullish()
    .transform(val => (val === null ? "" : val)),
});

export const supportSchema = z
  .object({
    mailObjet: z
      .string()
      .trim()
      .refine(val => val !== "", {
        message: "mailObjetRequired",
      })
      .refine(val => MailObjectEnum.includes(val as MailObjectType), {
        message: "mailObjetRequired",
      })
      .transform(val => val as MailObjectType),
    lastName: z
      .string()
      .nullish()
      .transform(val => (val === null ? "" : val)),
    firstName: z
      .string()
      .nullish()
      .transform(val => (val === null ? "" : val)),
    phonenumber: z
      .string()
      .nullish()
      .transform(val => val ?? ""),
    mailaddress: z.string().min(1, { message: "emailRequired" }).email({ message: "invalidEmail" }),
    mailaddressConfirmation: z
      .string()
      .min(1, { message: "emailRequired" })
      .email({ message: "invalidEmail" }),
    idec: z
      .union([
        z.string().length(0, { message: "messageSizeIdec" }),
        z.string().min(7, { message: "messageSizeIdec" }).max(9, { message: "messageSizeIdec" }),
      ])
      .optional()
      .transform(val => (val === null ? "" : val)),
    message: z.string().max(4000).min(1, { message: "messageRequired" }),
  })
  .superRefine(({ mailaddress, mailaddressConfirmation }, refinementContext) => {
    if (mailaddress !== mailaddressConfirmation) {
      refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: "emailConfirmationFailed",
        path: ["mailaddressConfirmation"],
      });
    }
  });

export const extendedSupportSchema = supportSchema._def.schema.extend({
  survey: z.string().min(1, { message: "surveyRequired" }),
});

export const unknownEmailForm = z
  .object({
    mailaddress: z.string().min(1, { message: "emailRequired" }).email({ message: "invalidEmail" }),
    mailaddressConfirmation: z
      .string()
      .min(1, { message: "emailRequired" })
      .email({ message: "invalidEmail" }),
  })
  .superRefine(({ mailaddress, mailaddressConfirmation }, refinementContext) => {
    if (mailaddress !== mailaddressConfirmation) {
      refinementContext.addIssue({
        code: z.ZodIssueCode.custom,
        message: "emailConfirmationFailed",
        path: ["mailaddressConfirmation"],
      });
    }
  });

export const knownEmailForm = z.object({
  mailaddress: z.string().min(1, { message: "emailRequired" }).email({ message: "invalidEmail" }),
});

export const forgotPasswordForm = z.object({
  idec: z.string().min(7, { message: "idecHintText" }).max(9, { message: "idecHintText" }),
});
