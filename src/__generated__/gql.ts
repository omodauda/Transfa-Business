/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation ForgotPasswordEmail($input: EmailInput!) {\n    forgotPasswordEmail(input: $input) {\n      message\n    }\n  }\n": types.ForgotPasswordEmailDocument,
    "\n  mutation ForgotPasswordPhone($input: PhoneInput!) {\n    forgotPasswordPhone(input: $input) {\n      message\n    }\n  }\n": types.ForgotPasswordPhoneDocument,
    "\n  query GetBusiness {\n    getBusiness {\n      id\n      status\n      registrationNo\n      phone\n      email\n      businessName\n      riders {\n        id\n        status\n        phone\n        fullName\n        bikeRegNo\n        bikeImage\n      }\n    }\n  }\n": types.GetBusinessDocument,
    "\n  mutation Login($input: LoginWithEmailInput!) {\n    loginBusiness(input: $input) {\n      token\n    }\n  }\n": types.LoginDocument,
    "\n  mutation Register($input: RegisterBusinessInput!) {\n    registerBusiness (input: $input) {\n      token\n    }\n  }\n": types.RegisterDocument,
    "\n  mutation ResetPasswordEmail($input: ResetPasswordWithEmailInput!) {\n    resetPasswordWithEmail(input: $input) {\n      message\n    }\n  }\n": types.ResetPasswordEmailDocument,
    "\n  mutation ResetPasswordWithPhone($input: ResetPasswordWithPhoneInput!) {\n    resetPasswordWithPhone(input: $input) {\n      message\n    }\n  }\n": types.ResetPasswordWithPhoneDocument,
    "\n  mutation SaveFcmToken($input: SaveUserDeviceIdInput!) {\n    saveUserDeviceId(input: $input) {\n      message\n    }\n  }\n": types.SaveFcmTokenDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ForgotPasswordEmail($input: EmailInput!) {\n    forgotPasswordEmail(input: $input) {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation ForgotPasswordEmail($input: EmailInput!) {\n    forgotPasswordEmail(input: $input) {\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ForgotPasswordPhone($input: PhoneInput!) {\n    forgotPasswordPhone(input: $input) {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation ForgotPasswordPhone($input: PhoneInput!) {\n    forgotPasswordPhone(input: $input) {\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetBusiness {\n    getBusiness {\n      id\n      status\n      registrationNo\n      phone\n      email\n      businessName\n      riders {\n        id\n        status\n        phone\n        fullName\n        bikeRegNo\n        bikeImage\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetBusiness {\n    getBusiness {\n      id\n      status\n      registrationNo\n      phone\n      email\n      businessName\n      riders {\n        id\n        status\n        phone\n        fullName\n        bikeRegNo\n        bikeImage\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Login($input: LoginWithEmailInput!) {\n    loginBusiness(input: $input) {\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation Login($input: LoginWithEmailInput!) {\n    loginBusiness(input: $input) {\n      token\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation Register($input: RegisterBusinessInput!) {\n    registerBusiness (input: $input) {\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation Register($input: RegisterBusinessInput!) {\n    registerBusiness (input: $input) {\n      token\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ResetPasswordEmail($input: ResetPasswordWithEmailInput!) {\n    resetPasswordWithEmail(input: $input) {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation ResetPasswordEmail($input: ResetPasswordWithEmailInput!) {\n    resetPasswordWithEmail(input: $input) {\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ResetPasswordWithPhone($input: ResetPasswordWithPhoneInput!) {\n    resetPasswordWithPhone(input: $input) {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation ResetPasswordWithPhone($input: ResetPasswordWithPhoneInput!) {\n    resetPasswordWithPhone(input: $input) {\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SaveFcmToken($input: SaveUserDeviceIdInput!) {\n    saveUserDeviceId(input: $input) {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation SaveFcmToken($input: SaveUserDeviceIdInput!) {\n    saveUserDeviceId(input: $input) {\n      message\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;