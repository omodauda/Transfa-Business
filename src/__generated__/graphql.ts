/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Banking account number is a string of 5 to 17 alphanumeric values for representing an generic account number */
  AccountNumber: any;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: any;
  /** The `Byte` scalar type represents byte value as a Buffer */
  Byte: any;
  /** A country code as defined by ISO 3166-1 alpha-2 */
  CountryCode: any;
  /** A field whose value conforms to the standard cuid format as specified in https://github.com/ericelliott/cuid#broken-down */
  Cuid: any;
  /** A field whose value is a Currency: https://en.wikipedia.org/wiki/ISO_4217. */
  Currency: any;
  /** A field whose value conforms to the standard DID format as specified in did-core: https://www.w3.org/TR/did-core/. */
  DID: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /**
   *
   *     A string representing a duration conforming to the ISO8601 standard,
   *     such as: P1W1DT13H23M34S
   *     P is the duration designator (for period) placed at the start of the duration representation.
   *     Y is the year designator that follows the value for the number of years.
   *     M is the month designator that follows the value for the number of months.
   *     W is the week designator that follows the value for the number of weeks.
   *     D is the day designator that follows the value for the number of days.
   *     T is the time designator that precedes the time components of the representation.
   *     H is the hour designator that follows the value for the number of hours.
   *     M is the minute designator that follows the value for the number of minutes.
   *     S is the second designator that follows the value for the number of seconds.
   *
   *     Note the time designator, T, that precedes the time value.
   *
   *     Matches moment.js, Luxon and DateFns implementations
   *     ,/. is valid for decimal places and +/- is a valid prefix
   *
   */
  Duration: any;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  GUID: any;
  /** A field whose value is a CSS HSL color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
  HSL: any;
  /** A field whose value is a CSS HSLA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
  HSLA: any;
  /** A field whose value is a hex color code: https://en.wikipedia.org/wiki/Web_colors. */
  HexColorCode: any;
  /** A field whose value is a hexadecimal: https://en.wikipedia.org/wiki/Hexadecimal. */
  Hexadecimal: any;
  /** A field whose value is an International Bank Account Number (IBAN): https://en.wikipedia.org/wiki/International_Bank_Account_Number. */
  IBAN: any;
  /** A field whose value is either an IPv4 or IPv6 address: https://en.wikipedia.org/wiki/IP_address. */
  IP: any;
  /** A field whose value is a IPv4 address: https://en.wikipedia.org/wiki/IPv4. */
  IPv4: any;
  /** A field whose value is a IPv6 address: https://en.wikipedia.org/wiki/IPv6. */
  IPv6: any;
  /** A field whose value is a ISBN-10 or ISBN-13 number: https://en.wikipedia.org/wiki/International_Standard_Book_Number. */
  ISBN: any;
  /**
   *
   *     A string representing a duration conforming to the ISO8601 standard,
   *     such as: P1W1DT13H23M34S
   *     P is the duration designator (for period) placed at the start of the duration representation.
   *     Y is the year designator that follows the value for the number of years.
   *     M is the month designator that follows the value for the number of months.
   *     W is the week designator that follows the value for the number of weeks.
   *     D is the day designator that follows the value for the number of days.
   *     T is the time designator that precedes the time components of the representation.
   *     H is the hour designator that follows the value for the number of hours.
   *     M is the minute designator that follows the value for the number of minutes.
   *     S is the second designator that follows the value for the number of seconds.
   *
   *     Note the time designator, T, that precedes the time value.
   *
   *     Matches moment.js, Luxon and DateFns implementations
   *     ,/. is valid for decimal places and +/- is a valid prefix
   *
   */
  ISO8601Duration: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: any;
  /** A field whose value is a valid decimal degrees latitude number (53.471): https://en.wikipedia.org/wiki/Latitude */
  Latitude: any;
  /** A local date string (i.e., with no associated timezone) in `YYYY-MM-DD` format, e.g. `2020-01-01`. */
  LocalDate: any;
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`.  This scalar is very similar to the `LocalTime`, with the only difference being that `LocalEndTime` also allows `24:00` as a valid value to indicate midnight of the following day.  This is useful when using the scalar to represent the exclusive upper bound of a time block. */
  LocalEndTime: any;
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`. */
  LocalTime: any;
  /** The locale in the format of a BCP 47 (RFC 5646) standard string */
  Locale: any;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: any;
  /** A field whose value is a valid decimal degrees longitude number (53.471): https://en.wikipedia.org/wiki/Longitude */
  Longitude: any;
  /** A field whose value is a IEEE 802 48-bit MAC address: https://en.wikipedia.org/wiki/MAC_address. */
  MAC: any;
  /** Floats that will have a value less than 0. */
  NegativeFloat: any;
  /** Integers that will have a value less than 0. */
  NegativeInt: any;
  /** A string that cannot be passed as an empty value */
  NonEmptyString: any;
  /** Floats that will have a value of 0 or more. */
  NonNegativeFloat: any;
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: any;
  /** Floats that will have a value of 0 or less. */
  NonPositiveFloat: any;
  /** Integers that will have a value of 0 or less. */
  NonPositiveInt: any;
  /** A field whose value conforms with the standard mongodb object ID as described here: https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId. Example: 5e5677d71bdc2ae76344968c */
  ObjectID: any;
  /** A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234. */
  PhoneNumber: any;
  /** A field whose value is a valid TCP port within the range of 0 to 65535: https://en.wikipedia.org/wiki/Transmission_Control_Protocol#TCP_ports */
  Port: any;
  /** Floats that will have a value greater than 0. */
  PositiveFloat: any;
  /** Integers that will have a value greater than 0. */
  PositiveInt: any;
  /** A field whose value conforms to the standard postal code formats for United States, United Kingdom, Germany, Canada, France, Italy, Australia, Netherlands, Spain, Denmark, Sweden, Belgium, India, Austria, Portugal, Switzerland or Luxembourg. */
  PostalCode: any;
  /** A field whose value is a CSS RGB color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
  RGB: any;
  /** A field whose value is a CSS RGBA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
  RGBA: any;
  /** In the US, an ABA routing transit number (`ABA RTN`) is a nine-digit code to identify the financial institution. */
  RoutingNumber: any;
  /** The `SafeInt` scalar type represents non-fractional signed whole numeric values that are considered safe as defined by the ECMAScript specification. */
  SafeInt: any;
  /** A field whose value is a Semantic Version: https://semver.org */
  SemVer: any;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: any;
  /** A field whose value exists in the standard IANA Time Zone Database: https://www.iana.org/time-zones */
  TimeZone: any;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any;
  /** A currency string, such as $21.25 */
  USCurrency: any;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: any;
  /** Floats that will have a value of 0 or more. */
  UnsignedFloat: any;
  /** Integers that will have a value of 0 or more. */
  UnsignedInt: any;
  /** A field whose value is a UTC Offset: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
  UtcOffset: any;
  /** Represents NULL values */
  Void: any;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  message: Scalars['String'];
  token: Scalars['String'];
};

export type AuthRule = {
  allow: AuthStrategy;
  identityClaim?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<Role>>;
};

export enum AuthStrategy {
  /**
   * To restrict a record's access to a specific user, use the `owner` strategy.
   * When `owner` authorization is configured, only the record's `owner` is allowed the specified operations.
   */
  Owner = 'owner',
  Role = 'role'
}

export type Business = {
  __typename?: 'Business';
  businessName: Scalars['NonEmptyString'];
  email: Scalars['EmailAddress'];
  id: Scalars['NonEmptyString'];
  phone: Scalars['PhoneNumber'];
  registrationNo: Scalars['NonEmptyString'];
  riders?: Maybe<Array<Rider>>;
  status: BusinessReviewStatus;
};

export enum BusinessReviewStatus {
  Cancelled = 'cancelled',
  Fulfilled = 'fulfilled',
  Pending = 'pending'
}

export type ChangeEmailInput = {
  newEmail: Scalars['EmailAddress'];
};

export type ChangePasswordInput = {
  currentPassword: Scalars['NonEmptyString'];
  newPassword: Scalars['NonEmptyString'];
};

export type ChangePhoneNumberInput = {
  newPhone: Scalars['PhoneNumber'];
};

export type City = {
  __typename?: 'City';
  id: Scalars['ID'];
  label: Scalars['String'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  value: Scalars['String'];
};

export type CreateOrderInput = {
  amount: Scalars['NonNegativeInt'];
  deliveryDetails: OrderDeliveryDetailsInput;
  itemDescription?: InputMaybe<Scalars['NonEmptyString']>;
  itemInformation: Scalars['NonEmptyString'];
  itemSize?: InputMaybe<Scalars['NonEmptyString']>;
  paymentMethod: PaymentMethod;
  pickUpDetails: OrderPickUpDetailsInput;
};

export type CreatePaymentInput = {
  amount: Scalars['NonNegativeInt'];
  trnx_id: Scalars['NonEmptyString'];
  trnx_ref: Scalars['NonEmptyString'];
};

export type CreatePaymentResponse = {
  __typename?: 'CreatePaymentResponse';
  amount: Scalars['NonNegativeInt'];
  status: PaymentStatus;
};

export type Customer = {
  __typename?: 'Customer';
  currentShipment?: Maybe<Order>;
  email?: Maybe<Scalars['EmailAddress']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phone: Scalars['PhoneNumber'];
  recentShipment?: Maybe<Order>;
};

export type EmailInput = {
  email: Scalars['EmailAddress'];
};

export type GetCustomerOrdersInput = {
  limit: Scalars['NonNegativeInt'];
  offset: Scalars['NonNegativeInt'];
};

export type GetOrderPriceInput = {
  latitideA: Scalars['NonEmptyString'];
  latitudeB: Scalars['NonEmptyString'];
  longitudeA: Scalars['NonEmptyString'];
  longitudeB: Scalars['NonEmptyString'];
};

export type GetOrderPriceResponse = {
  __typename?: 'GetOrderPriceResponse';
  price: Scalars['NonNegativeInt'];
};

export type LoginWithEmailInput = {
  email: Scalars['EmailAddress'];
  password: Scalars['NonEmptyString'];
};

export type LoginWithPhoneInput = {
  password: Scalars['NonEmptyString'];
  phone: Scalars['PhoneNumber'];
};

export type MessageResponse = {
  __typename?: 'MessageResponse';
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changeEmail: MessageResponse;
  changePassword: MessageResponse;
  changePhoneNumber: MessageResponse;
  createOrder: MessageResponse;
  createPayment: CreatePaymentResponse;
  forgotPasswordEmail: MessageResponse;
  forgotPasswordPhone: MessageResponse;
  loginBusiness: AuthResponse;
  loginCustomerWithEmail: AuthResponse;
  loginCustomerWithPhone: AuthResponse;
  registerBusiness: AuthResponse;
  registerCustomer: AuthResponse;
  removeUserDeviceId: MessageResponse;
  resendOtpOnChangeEmail: MessageResponse;
  resendOtpOnChangePhone: MessageResponse;
  resetEmail: MessageResponse;
  resetPasswordWithEmail: MessageResponse;
  resetPasswordWithPhone: MessageResponse;
  resetPhoneNumber: MessageResponse;
  saveUserDeviceId: MessageResponse;
  updateUserName: MessageResponse;
};


export type MutationChangeEmailArgs = {
  input: ChangeEmailInput;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationChangePhoneNumberArgs = {
  input: ChangePhoneNumberInput;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationCreatePaymentArgs = {
  input: CreatePaymentInput;
};


export type MutationForgotPasswordEmailArgs = {
  input: EmailInput;
};


export type MutationForgotPasswordPhoneArgs = {
  input: PhoneInput;
};


export type MutationLoginBusinessArgs = {
  input: LoginWithEmailInput;
};


export type MutationLoginCustomerWithEmailArgs = {
  input: LoginWithEmailInput;
};


export type MutationLoginCustomerWithPhoneArgs = {
  input: LoginWithPhoneInput;
};


export type MutationRegisterBusinessArgs = {
  input: RegisterBusinessInput;
};


export type MutationRegisterCustomerArgs = {
  input: RegisterCustomerInput;
};


export type MutationResendOtpOnChangeEmailArgs = {
  input: EmailInput;
};


export type MutationResendOtpOnChangePhoneArgs = {
  input: PhoneInput;
};


export type MutationResetEmailArgs = {
  input: ResetEmailInput;
};


export type MutationResetPasswordWithEmailArgs = {
  input: ResetPasswordWithEmailInput;
};


export type MutationResetPasswordWithPhoneArgs = {
  input: ResetPasswordWithPhoneInput;
};


export type MutationResetPhoneNumberArgs = {
  input: ResetPhoneNumberInput;
};


export type MutationSaveUserDeviceIdArgs = {
  input: SaveUserDeviceIdInput;
};


export type MutationUpdateUserNameArgs = {
  input: UpdateUserNameInput;
};

export type Notification = {
  __typename?: 'Notification';
  body: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  order: Order;
  title: Scalars['String'];
  type: OrderStatus;
};

export type Order = {
  __typename?: 'Order';
  amount: Scalars['NonNegativeInt'];
  createdAt: Scalars['DateTime'];
  deliveryDetails: OrderDeliveryDetails;
  id: Scalars['ID'];
  itemDescription?: Maybe<Scalars['String']>;
  itemInformation: Scalars['String'];
  itemSize: Scalars['String'];
  paymentMethod: PaymentMethod;
  pickUpDetails: OrderPickUpDetails;
  status: OrderStatus;
};

export type OrderDeliveryDetails = {
  __typename?: 'OrderDeliveryDetails';
  address: Scalars['String'];
  city: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  order?: Maybe<Order>;
  phone: Scalars['PhoneNumber'];
  state: Scalars['String'];
};

export type OrderDeliveryDetailsInput = {
  address: Scalars['NonEmptyString'];
  cityId: Scalars['ID'];
  name: Scalars['NonEmptyString'];
  phone: Scalars['PhoneNumber'];
  stateId: Scalars['ID'];
};

export type OrderPickUpDetails = {
  __typename?: 'OrderPickUpDetails';
  address: Scalars['String'];
  city: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  order?: Maybe<Order>;
  phone: Scalars['PhoneNumber'];
  pickUpDate: Scalars['DateTime'];
  state: Scalars['String'];
};

export type OrderPickUpDetailsInput = {
  address: Scalars['NonEmptyString'];
  cityId: Scalars['ID'];
  name: Scalars['NonEmptyString'];
  phone: Scalars['PhoneNumber'];
  pickUpDate: Scalars['DateTime'];
  stateId: Scalars['ID'];
};

export enum OrderStatus {
  Cancelled = 'cancelled',
  Fulfilled = 'fulfilled',
  Pending = 'pending'
}

export type PaginatedCustomerOrders = {
  __typename?: 'PaginatedCustomerOrders';
  data?: Maybe<Array<Order>>;
  total?: Maybe<Scalars['NonNegativeInt']>;
  totalResults?: Maybe<Scalars['NonNegativeInt']>;
};

export enum PaymentMethod {
  Card = 'card',
  OnDelivery = 'on_delivery'
}

export enum PaymentStatus {
  Unverified = 'unverified',
  Verified = 'verified'
}

export type PhoneInput = {
  phone: Scalars['PhoneNumber'];
};

export type Query = {
  __typename?: 'Query';
  getBusiness: Business;
  getCitiesByStateId: Array<City>;
  getCustomer: Customer;
  getCustomerOrders?: Maybe<PaginatedCustomerOrders>;
  getOrderPrice: GetOrderPriceResponse;
  getStates: Array<State>;
  myNotifications?: Maybe<Array<Notification>>;
};


export type QueryGetCitiesByStateIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetCustomerOrdersArgs = {
  input?: InputMaybe<GetCustomerOrdersInput>;
};


export type QueryGetOrderPriceArgs = {
  input: GetOrderPriceInput;
};

export type RegisterBusinessInput = {
  address: Scalars['NonEmptyString'];
  businessName: Scalars['NonEmptyString'];
  email: Scalars['EmailAddress'];
  password: Scalars['NonEmptyString'];
  phone: Scalars['PhoneNumber'];
  registrationNo: Scalars['NonEmptyString'];
};

export type RegisterCustomerInput = {
  email?: InputMaybe<Scalars['EmailAddress']>;
  fullName: Scalars['NonEmptyString'];
  password: Scalars['NonEmptyString'];
  phone: Scalars['PhoneNumber'];
};

export type ResetEmailInput = {
  newEmail: Scalars['EmailAddress'];
  otp: Scalars['NonEmptyString'];
};

export type ResetPasswordWithEmailInput = {
  email: Scalars['EmailAddress'];
  newPassword: Scalars['NonEmptyString'];
  otp: Scalars['NonEmptyString'];
};

export type ResetPasswordWithPhoneInput = {
  newPassword: Scalars['NonEmptyString'];
  otp: Scalars['NonEmptyString'];
  phone: Scalars['PhoneNumber'];
};

export type ResetPhoneNumberInput = {
  newPhone: Scalars['PhoneNumber'];
  otp: Scalars['NonEmptyString'];
};

export type Rider = {
  __typename?: 'Rider';
  bikeImage: Scalars['NonEmptyString'];
  bikeRegNo: Scalars['NonEmptyString'];
  fullName: Scalars['NonEmptyString'];
  id: Scalars['NonEmptyString'];
  phone: Scalars['PhoneNumber'];
  status: RiderStatus;
};

export enum RiderStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export enum Role {
  Admin = 'ADMIN',
  Business = 'BUSINESS',
  Customer = 'CUSTOMER',
  Rider = 'RIDER'
}

export type SaveUserDeviceIdInput = {
  token: Scalars['NonEmptyString'];
};

export type State = {
  __typename?: 'State';
  id: Scalars['ID'];
  label: Scalars['String'];
  value: Scalars['String'];
};

export type UpdateUserNameInput = {
  fullName: Scalars['NonEmptyString'];
};

export type ForgotPasswordPhoneMutationVariables = Exact<{
  input: PhoneInput;
}>;


export type ForgotPasswordPhoneMutation = { __typename?: 'Mutation', forgotPasswordPhone: { __typename?: 'MessageResponse', message: string } };

export type LoginMutationVariables = Exact<{
  input: LoginWithEmailInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', loginBusiness: { __typename?: 'AuthResponse', token: string } };

export type RegisterMutationVariables = Exact<{
  input: RegisterBusinessInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', registerBusiness: { __typename?: 'AuthResponse', token: string } };


export const ForgotPasswordPhoneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ForgotPasswordPhone"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PhoneInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forgotPasswordPhone"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<ForgotPasswordPhoneMutation, ForgotPasswordPhoneMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginWithEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginBusiness"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterBusinessInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerBusiness"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;