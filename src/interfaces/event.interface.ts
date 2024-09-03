export interface EventsResponse {
  _embedded: EventsResponseEmbedded;
  _links:    EventsResponseLinks;
  page:      Page;
}

export interface EventsResponseEmbedded {
  events: Event[];
}

export interface Event {
  name:      string;
  type:      EventType;
  id:        string;
  test:      boolean;
  locale:    Locale;
  images:    Image[];
  dates:     Dates;
  ticketing: Ticketing;
  _links:    EventLinks;
  _embedded: EventEmbedded;
}

export interface EventEmbedded {
  venues: Venue[];
}

export interface Venue {
  name:           VenueName;
  type:           VenueType;
  id:             VenueID;
  test:           boolean;
  locale:         Locale;
  timezone:       Timezone;
  country:        Country;
  upcomingEvents: UpcomingEvents;
  _links:         VenueLinks;
  postalCode?:    string;
  city?:          City;
  state?:         State;
  address?:       Address;
  location?:      Location;
}

export interface VenueLinks {
  self: First;
}

export interface First {
  href: string;
}

export interface Address {
  line1: string;
}

export interface City {
  name: string;
}

export interface Country {
  name:        CountryName;
  countryCode: CountryCode;
}

export enum CountryCode {
  Mex = "MEX",
}

export enum CountryName {
  Mex = "Mex",
}

export enum VenueID {
  Za5Ju3RKuqZBaWHquCeaGDhSFUblCI8PW = "Za5ju3rKuqZBaWHquCeaGDhSFUblCI8pW",
  Za5Ju3RKuqZDe2MZpOBUg7NY54DFc3VhN = "Za5ju3rKuqZDe2mZpOBUg7-nY54DFc3VhN",
  Za5Ju3RKuqZDvgn8YJNlUsBsl69UPSNW = "Za5ju3rKuqZDvgn8yJNl_usBsl69_UpsNW",
  Za5Ju3RKuqZDvvTuZoMO47PbdZhd4EWMB = "Za5ju3rKuqZDvvTuZoMO47PbdZhd4e-wMb",
}

export enum Locale {
  EnUs = "en-us",
}

export interface Location {
  longitude: string;
  latitude:  string;
}

export enum VenueName {
  AutodromoHermanosRodriguez = "Autodromo Hermanos Rodriguez",
  EstadioCiudadDeLosDeportes = "Estadio Ciudad de los Deportes",
  EstadioGNPSeguros = "Estadio GNP Seguros",
  NeoQuimicaArena = "Neo Quimica Arena",
}

export interface State {
  stateCode: string;
}

export enum Timezone {
  AmericaMexicoCity = "America/Mexico_City",
  AmericaNewYork = "America/New_York",
  AmericaRegina = "America/Regina",
}

export enum VenueType {
  Venue = "venue",
}

export interface UpcomingEvents {
  archtics:      number;
  _total:        number;
  _filtered:     number;
  ticketmaster?: number;
}

export interface EventLinks {
  self:   First;
  venues: First[];
}

export interface Dates {
  start:            Start;
  end:              End;
  timezone:         Timezone;
  status:           Status;
  spanMultipleDays: boolean;
}

export interface End {
  localDate:      Date;
  localTime:      string;
  dateTime:       Date;
  approximate:    boolean;
  noSpecificTime: boolean;
}

export interface Start {
  localDate:      Date;
  localTime:      string;
  dateTime:       Date;
  dateTBD:        boolean;
  dateTBA:        boolean;
  timeTBA:        boolean;
  noSpecificTime: boolean;
}

export interface Status {
  code: Code;
}

export enum Code {
  Offsale = "offsale",
}

export interface Image {
  ratio:    Ratio;
  url:      string;
  width:    number;
  height:   number;
  fallback: boolean;
}

export enum Ratio {
  The16_9 = "16_9",
  The3_2 = "3_2",
  The4_3 = "4_3",
}

export interface Ticketing {
  safeTix: SafeTix;
  id:      TicketingID;
}

export enum TicketingID {
  Ticketing = "ticketing",
}

export interface SafeTix {
  enabled:          boolean;
  inAppOnlyEnabled: boolean;
}

export enum EventType {
  Event = "event",
}

export interface EventsResponseLinks {
  first: First;
  self:  First;
  next:  First;
  last:  First;
}

export interface Page {
  size:          number;
  totalElements: number;
  totalPages:    number;
  number:        number;
}
