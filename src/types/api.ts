export type APISchemas = {
  ApiError: {
    /* Format: int32 */
    code?: number;
    path?: string;
    message?: string;
    /* Format: date-time */
    timestamp?: string;
  };
  UserDto: {
    identifier: string;
    role?: string;
    name?: string;
    firstName?: string;
    organization?: string;
    accreditedSources?: Array<string>;
    /* Format: date-time */
    creationDate?: string;
    creationAuthor?: string;
  };
  SurveyDto: {
    id: string;
    sourceId: string;
    /* Format: int32 */
    year?: number;
    /* Format: int32 */
    sampleSize?: number;
    longWording?: string;
    shortWording?: string;
    shortObjectives?: string;
    longObjectives?: string;
    visaNumber?: string;
    cnisUrl?: string;
    diffusionUrl?: string;
    noticeUrl?: string;
    specimenUrl?: string;
    communication?: string;
  };
  SurveyUnitAddressDto: {
    streetNumber?: string;
    repetitionIndex?: string;
    streetType?: string;
    streetName?: string;
    addressSupplement?: string;
    cityName?: string;
    zipCode?: string;
    cedexCode?: string;
    cedexName?: string;
    specialDistribution?: string;
    countryCode?: string;
    countryName?: string;
  };
  SurveyUnitDto: {
    idSu: string;
    identificationCode?: string;
    identificationName?: string;
    address?: APISchemas["SurveyUnitAddressDto"];
  };
  SupportDto: {
    id: string;
    label?: string;
    phoneNumber?: string;
    mail?: string;
    countryName?: string;
    streetNumber?: string;
    streetName?: string;
    city?: string;
    zipCode?: string;
  };
  SourceOnlineStatusDto: {
    id: string;
    longWording?: string;
    shortWording?: string;
    periodicity?: "X" | "A" | "S" | "T" | "B" | "M";
    /* Indicates whether or not you need to use the my surveys portal */
    mandatoryMySurveys?: boolean;
    /* Indicates if the source should be force closed */
    forceClose?: boolean;
    messageInfoSurveyOffline?: string;
    messageSurveyOffline?: string;
    ownerId?: string;
    supportId?: string;
  };
  AddressDto: {
    streetNumber?: string;
    repetitionIndex?: string;
    streetType?: string;
    streetName?: string;
    addressSupplement?: string;
    cityName?: string;
    zipCode?: string;
    cedexCode?: string;
    cedexName?: string;
    specialDistribution?: string;
    countryCode?: string;
    countryName?: string;
  };
  ContactAccreditationDto: {
    identifier?: string;
    externalId?: string;
    civility?: "Female" | "Male" | "Undefined";
    lastName?: string;
    firstName?: string;
    function?: string;
    email?: string;
    phone?: string;
    address?: APISchemas["AddressDto"];
    main?: boolean;
  };
  QuestioningWebclientDto: {
    idPartitioning: string;
    modelName: string;
    surveyUnit?: APISchemas["SurveyUnitDto"];
    contacts?: Array<APISchemas["ContactAccreditationDto"]>;
  };
  PartitioningDto: {
    id: string;
    campaignId?: string;
    label?: string;
    /* Format: date-time */
    openingDate?: string;
    /* Format: date-time */
    closingDate?: string;
    /* Format: date-time */
    returnDate?: string;
  };
  OwnerDto: { id: string; label?: string; ministry?: string; logo?: string };
  CampaignMoogDto: {
    id?: string;
    label?: string;
    /* Format: int64 */
    collectionStartDate?: number;
    /* Format: int64 */
    collectionEndDate?: number;
  };
  CampaignDto: {
    id: string;
    surveyId?: string;
    /* Format: int32 */
    year?: number;
    campaignWording?: string;
    period?:
      | "A00"
      | "X00"
      | "X01"
      | "X02"
      | "X03"
      | "X04"
      | "X05"
      | "X06"
      | "X07"
      | "X08"
      | "X09"
      | "X10"
      | "X11"
      | "X12"
      | "X13"
      | "X14"
      | "X15"
      | "X16"
      | "X17"
      | "X18"
      | "X19"
      | "X20"
      | "X21"
      | "X22"
      | "X23"
      | "X24"
      | "X25"
      | "X26"
      | "X27"
      | "X28"
      | "X29"
      | "X30"
      | "X31"
      | "X32"
      | "X33"
      | "X34"
      | "X35"
      | "X36"
      | "X37"
      | "X38"
      | "X39"
      | "X40"
      | "X41"
      | "X42"
      | "X43"
      | "X44"
      | "X45"
      | "X46"
      | "X47"
      | "X48"
      | "X49"
      | "X50"
      | "X51"
      | "X52"
      | "X53"
      | "X54"
      | "X55"
      | "X56"
      | "X57"
      | "X58"
      | "X59"
      | "X60"
      | "X61"
      | "X62"
      | "X63"
      | "X64"
      | "X65"
      | "X66"
      | "X67"
      | "X68"
      | "X69"
      | "X70"
      | "X71"
      | "X72"
      | "X73"
      | "X74"
      | "X75"
      | "X76"
      | "X77"
      | "X78"
      | "X79"
      | "X80"
      | "X81"
      | "X82"
      | "X83"
      | "X84"
      | "X85"
      | "X86"
      | "X87"
      | "X88"
      | "X89"
      | "X90"
      | "X91"
      | "X92"
      | "X93"
      | "X94"
      | "X95"
      | "X96"
      | "X97"
      | "X98"
      | "X99"
      | "S01"
      | "S02"
      | "T01"
      | "T02"
      | "T03"
      | "T04"
      | "M01"
      | "M02"
      | "M03"
      | "M04"
      | "M05"
      | "M06"
      | "M07"
      | "M08"
      | "M09"
      | "M10"
      | "M11"
      | "M12"
      | "B01"
      | "B02"
      | "B03"
      | "B04"
      | "B05"
      | "B06";
  };
  MetadataDto: {
    partitioning?: APISchemas["PartitioningDto"];
    campaign?: APISchemas["CampaignDto"];
    survey?: APISchemas["SurveyDto"];
    source?: APISchemas["SourceDto"];
    owner?: APISchemas["OwnerDto"];
    support?: APISchemas["SupportDto"];
  };
  SourceDto: {
    id?: string;
    longWording?: string;
    shortWording?: string;
    periodicity?: "X" | "A" | "S" | "T" | "B" | "M";
    mandatoryMySurveys?: boolean;
  };
  ContactDto: {
    identifier: string;
    externalId?: string;
    civility?: string;
    lastName?: string;
    firstName?: string;
    function?: string;
    email?: string;
    phone?: string;
    otherPhone?: string;
    usualCompanyName?: string;
    address?: APISchemas["AddressDto"];
  };
  ParamsDto: { paramId?: string; paramValue?: string };
  JsonNode: object;
  UserEventDto: {
    /* Format: int64 */
    id?: number;
    identifier: string;
    /* Format: date-time */
    eventDate?: string;
    type?: string;
    payload?: APISchemas["JsonNode"];
  };
  SurveyUnitCommentInputDto: { comment?: string; author?: string };
  SourceAccreditationDto: {
    /* Format: date-time */
    creationDate?: string;
    creationAuthor: string;
    idUser: string;
  };
  QuestioningDto: {
    /* Format: int64 */
    id?: number;
    surveyUnitId?: string;
    idPartitioning?: string;
    modelName?: string;
  };
  QuestioningAccreditationDto: {
    /* Format: date-time */
    creationDate?: string;
    creationAuthor?: string;
    idContact?: string;
    main?: boolean;
  };
  QuestioningEventDto: {
    /* Format: int64 */
    id?: number;
    /* Format: int64 */
    questioningId?: number;
    /* Format: date-time */
    eventDate?: string;
    type?: string;
    payload?: APISchemas["JsonNode"];
  };
  StateDto: { state?: string };
  MoogUploadQuestioningEventDto: {
    idSu?: string;
    idContact?: string;
    date?: string;
    status?: string;
  };
  UploadDto: { data?: Array<APISchemas["MoogUploadQuestioningEventDto"]> };
  ResultUpload: {
    OK?: Array<APISchemas["ResultUploadValidInfo"]>;
    KO?: Array<APISchemas["ResultUploadErrorInfo"]>;
  };
  ResultUploadErrorInfo: { id?: string; error?: string };
  ResultUploadValidInfo: { id?: string };
  ContactEventDto: {
    identifier?: string;
    /* Format: date-time */
    eventDate?: string;
    type?: string;
    payload?: APISchemas["JsonNode"];
  };
  OnGoingDto: { ongoing?: boolean };
  PageableObject: {
    paged?: boolean;
    /* Format: int32 */
    pageNumber?: number;
    /* Format: int32 */
    pageSize?: number;
    /* Format: int64 */
    offset?: number;
    sort?: Array<APISchemas["SortObject"]>;
    unpaged?: boolean;
  };
  SortObject: {
    direction?: string;
    nullHandling?: string;
    ascending?: boolean;
    property?: string;
    ignoreCase?: boolean;
  };
  UserPage: {
    content?: Array<APISchemas["UserDto"]>;
    pageable?: APISchemas["PageableObject"];
    last?: boolean;
    /* Format: int64 */
    totalElements?: number;
    /* Format: int32 */
    totalPages?: number;
    first?: boolean;
    /* Format: int32 */
    size?: number;
    /* Format: int32 */
    number?: number;
    sort?: Array<APISchemas["SortObject"]>;
    /* Format: int32 */
    numberOfElements?: number;
    empty?: boolean;
  };
  JSONCollectionWrapperMoogProgressDto: {
    datas?: Array<APISchemas["MoogProgressDto"]>;
  };
  MoogProgressDto: {
    /* Format: int32 */
    nbSu?: number;
    batchNumber?: string;
    /* Format: int32 */
    nbIntReceived?: number;
    /* Format: int32 */
    nbPapReceived?: number;
    /* Format: int32 */
    nbPND?: number;
    /* Format: int32 */
    nbHC?: number;
    /* Format: int32 */
    nbRefusal?: number;
    /* Format: int32 */
    nbOtherWastes?: number;
    /* Format: int32 */
    nbIntPart?: number;
  };
  JSONCollectionWrapperMoogFollowUpDto: {
    datas?: Array<APISchemas["MoogFollowUpDto"]>;
  };
  MoogFollowUpDto: {
    /* Format: int32 */
    nb?: number;
    /* Format: int32 */
    freq?: number;
    batchNum?: string;
  };
  SurveyPage: {
    content?: Array<APISchemas["SurveyDto"]>;
    pageable?: APISchemas["PageableObject"];
    last?: boolean;
    /* Format: int64 */
    totalElements?: number;
    /* Format: int32 */
    totalPages?: number;
    first?: boolean;
    /* Format: int32 */
    size?: number;
    /* Format: int32 */
    number?: number;
    sort?: Array<APISchemas["SortObject"]>;
    /* Format: int32 */
    numberOfElements?: number;
    empty?: boolean;
  };
  CampaignPartitioningsDto: {
    id: string;
    surveyId?: string;
    /* Format: int32 */
    year?: number;
    campaignWording?: string;
    period?:
      | "A00"
      | "X00"
      | "X01"
      | "X02"
      | "X03"
      | "X04"
      | "X05"
      | "X06"
      | "X07"
      | "X08"
      | "X09"
      | "X10"
      | "X11"
      | "X12"
      | "X13"
      | "X14"
      | "X15"
      | "X16"
      | "X17"
      | "X18"
      | "X19"
      | "X20"
      | "X21"
      | "X22"
      | "X23"
      | "X24"
      | "X25"
      | "X26"
      | "X27"
      | "X28"
      | "X29"
      | "X30"
      | "X31"
      | "X32"
      | "X33"
      | "X34"
      | "X35"
      | "X36"
      | "X37"
      | "X38"
      | "X39"
      | "X40"
      | "X41"
      | "X42"
      | "X43"
      | "X44"
      | "X45"
      | "X46"
      | "X47"
      | "X48"
      | "X49"
      | "X50"
      | "X51"
      | "X52"
      | "X53"
      | "X54"
      | "X55"
      | "X56"
      | "X57"
      | "X58"
      | "X59"
      | "X60"
      | "X61"
      | "X62"
      | "X63"
      | "X64"
      | "X65"
      | "X66"
      | "X67"
      | "X68"
      | "X69"
      | "X70"
      | "X71"
      | "X72"
      | "X73"
      | "X74"
      | "X75"
      | "X76"
      | "X77"
      | "X78"
      | "X79"
      | "X80"
      | "X81"
      | "X82"
      | "X83"
      | "X84"
      | "X85"
      | "X86"
      | "X87"
      | "X88"
      | "X89"
      | "X90"
      | "X91"
      | "X92"
      | "X93"
      | "X94"
      | "X95"
      | "X96"
      | "X97"
      | "X98"
      | "X99"
      | "S01"
      | "S02"
      | "T01"
      | "T02"
      | "T03"
      | "T04"
      | "M01"
      | "M02"
      | "M03"
      | "M04"
      | "M05"
      | "M06"
      | "M07"
      | "M08"
      | "M09"
      | "M10"
      | "M11"
      | "M12"
      | "B01"
      | "B02"
      | "B03"
      | "B04"
      | "B05"
      | "B06";
    partitionings?: Array<APISchemas["PartitioningDto"]>;
  };
  SurveyUnitPage: {
    content?: Array<APISchemas["SurveyUnitDto"]>;
    pageable?: APISchemas["PageableObject"];
    last?: boolean;
    /* Format: int64 */
    totalElements?: number;
    /* Format: int32 */
    totalPages?: number;
    first?: boolean;
    /* Format: int32 */
    size?: number;
    /* Format: int32 */
    number?: number;
    sort?: Array<APISchemas["SortObject"]>;
    /* Format: int32 */
    numberOfElements?: number;
    empty?: boolean;
  };
  SurveyUnitCommentOutputDto: {
    comment?: string;
    author?: string;
    /* Format: date-time */
    commentDate?: string;
  };
  SurveyUnitDetailsDto: {
    idSu: string;
    identificationCode?: string;
    identificationName?: string;
    address?: APISchemas["SurveyUnitAddressDto"];
    hasQuestionings?: boolean;
    comments?: Array<APISchemas["SurveyUnitCommentOutputDto"]>;
  };
  SurveyUnitPartitioningDto: {
    sourceWording?: string;
    /* Format: int32 */
    year?: number;
    period?:
      | "A00"
      | "X00"
      | "X01"
      | "X02"
      | "X03"
      | "X04"
      | "X05"
      | "X06"
      | "X07"
      | "X08"
      | "X09"
      | "X10"
      | "X11"
      | "X12"
      | "X13"
      | "X14"
      | "X15"
      | "X16"
      | "X17"
      | "X18"
      | "X19"
      | "X20"
      | "X21"
      | "X22"
      | "X23"
      | "X24"
      | "X25"
      | "X26"
      | "X27"
      | "X28"
      | "X29"
      | "X30"
      | "X31"
      | "X32"
      | "X33"
      | "X34"
      | "X35"
      | "X36"
      | "X37"
      | "X38"
      | "X39"
      | "X40"
      | "X41"
      | "X42"
      | "X43"
      | "X44"
      | "X45"
      | "X46"
      | "X47"
      | "X48"
      | "X49"
      | "X50"
      | "X51"
      | "X52"
      | "X53"
      | "X54"
      | "X55"
      | "X56"
      | "X57"
      | "X58"
      | "X59"
      | "X60"
      | "X61"
      | "X62"
      | "X63"
      | "X64"
      | "X65"
      | "X66"
      | "X67"
      | "X68"
      | "X69"
      | "X70"
      | "X71"
      | "X72"
      | "X73"
      | "X74"
      | "X75"
      | "X76"
      | "X77"
      | "X78"
      | "X79"
      | "X80"
      | "X81"
      | "X82"
      | "X83"
      | "X84"
      | "X85"
      | "X86"
      | "X87"
      | "X88"
      | "X89"
      | "X90"
      | "X91"
      | "X92"
      | "X93"
      | "X94"
      | "X95"
      | "X96"
      | "X97"
      | "X98"
      | "X99"
      | "S01"
      | "S02"
      | "T01"
      | "T02"
      | "T03"
      | "T04"
      | "M01"
      | "M02"
      | "M03"
      | "M04"
      | "M05"
      | "M06"
      | "M07"
      | "M08"
      | "M09"
      | "M10"
      | "M11"
      | "M12"
      | "B01"
      | "B02"
      | "B03"
      | "B04"
      | "B05"
      | "B06";
    campaignWording?: string;
    /* Format: date-time */
    partioningClosingDate?: string;
    lastEvent?:
      | "INITLA"
      | "FOLLOWUP"
      | "PND"
      | "WASTE"
      | "PARTIELINT"
      | "HC"
      | "VALPAP"
      | "VALINT"
      | "REFUSAL";
  };
  SearchSurveyUnitContactDto: {
    identifier?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    city?: string;
    phoneNumber?: string;
    function?: string;
  };
  SearchSurveyUnitDto: {
    idSu?: string;
    identificationCode?: string;
    identificationName?: string;
  };
  SupportPage: {
    content?: Array<APISchemas["SupportDto"]>;
    pageable?: APISchemas["PageableObject"];
    last?: boolean;
    /* Format: int64 */
    totalElements?: number;
    /* Format: int32 */
    totalPages?: number;
    first?: boolean;
    /* Format: int32 */
    size?: number;
    /* Format: int32 */
    number?: number;
    sort?: Array<APISchemas["SortObject"]>;
    /* Format: int32 */
    numberOfElements?: number;
    empty?: boolean;
  };
  SourcePage: {
    content?: Array<APISchemas["SourceDto"]>;
    pageable?: APISchemas["PageableObject"];
    last?: boolean;
    /* Format: int64 */
    totalElements?: number;
    /* Format: int32 */
    totalPages?: number;
    first?: boolean;
    /* Format: int32 */
    size?: number;
    /* Format: int32 */
    number?: number;
    sort?: Array<APISchemas["SortObject"]>;
    /* Format: int32 */
    numberOfElements?: number;
    empty?: boolean;
  };
  OpenDto: {
    opened?: boolean;
    forceClose?: boolean;
    messageSurveyOffline?: string;
    messageInfoSurveyOffline?: string;
  };
  AssistanceDto: { mailAssistance?: string; surveyUnitId?: string };
  Address: {
    StreetNumber?: string;
    RepetitionIndex?: string;
    StreetType?: string;
    StreetName?: string;
    AddressSupplement?: string;
    CityName?: string;
    ZipCode?: string;
    CedexCode?: string;
    CedexName?: string;
    SpecialDistribution?: string;
    CountryCode?: string;
    CountryName?: string;
  };
  Contact: {
    Identity?: string;
    Email?: string;
    PhoneNumber?: string;
    UsualCompanyName?: string;
    Address?: APISchemas["Address"];
  };
  QuestioningInformations: {
    ReturnDate?: string;
    Logo?: string;
    UrlLogout?: string;
    UrlAssistance?: string;
    Contact?: APISchemas["Contact"];
    SurveyUnit?: APISchemas["SurveyUnit"];
  };
  SurveyUnit: { Label?: string; IdSu?: string; IdentificationName?: string };
  PeriodDto: { value?: string; label?: string; period?: string };
  PeriodicityDto: { value?: string; label?: string };
  EligibleDto: { eligible?: string };
  OwnerPage: {
    content?: Array<APISchemas["OwnerDto"]>;
    pageable?: APISchemas["PageableObject"];
    last?: boolean;
    /* Format: int64 */
    totalElements?: number;
    /* Format: int32 */
    totalPages?: number;
    first?: boolean;
    /* Format: int32 */
    size?: number;
    /* Format: int32 */
    number?: number;
    sort?: Array<APISchemas["SortObject"]>;
    /* Format: int32 */
    numberOfElements?: number;
    empty?: boolean;
  };
  JSONCollectionWrapperCampaignMoogDto: {
    datas?: Array<APISchemas["CampaignMoogDto"]>;
  };
  JSONCollectionWrapperUpload: { datas?: Array<APISchemas["Upload"]> };
  Questioning: {
    /* Format: int64 */
    id?: number;
    modelName?: string;
    idPartitioning?: string;
    questioningAccreditations?: Array<APISchemas["QuestioningAccreditation"]>;
    questioningEvents?: Array<APISchemas["QuestioningEvent"]>;
    surveyUnit?: APISchemas["SurveyUnit"];
  };
  QuestioningAccreditation: {
    /* Format: int64 */
    id?: number;
    /* Format: date-time */
    creationDate?: string;
    creationAuthor?: string;
    idContact?: string;
    questioning?: APISchemas["Questioning"];
    main?: boolean;
  };
  QuestioningEvent: {
    /* Format: int64 */
    id?: number;
    /* Format: date-time */
    date?: string;
    type?:
      | "INITLA"
      | "FOLLOWUP"
      | "PND"
      | "WASTE"
      | "PARTIELINT"
      | "HC"
      | "VALPAP"
      | "VALINT"
      | "REFUSAL";
    questioning?: APISchemas["Questioning"];
    upload?: APISchemas["Upload"];
    payload?: APISchemas["JsonNode"];
  };
  Upload: {
    /* Format: int64 */
    id?: number;
    /* Format: int64 */
    date?: number;
    questioningEvents?: Array<APISchemas["QuestioningEvent"]>;
  };
  JSONCollectionWrapperMoogExtractionRowDto: {
    datas?: Array<APISchemas["MoogExtractionRowDto"]>;
  };
  MoogExtractionRowDto: {
    status?: string;
    dateInfo?: string;
    idSu?: string;
    idContact?: string;
    lastname?: string;
    firstname?: string;
    address?: string;
    batchNumber?: string;
    /* Format: int32 */
    pnd?: number;
  };
  MoogCampaign: {
    id?: string;
    label?: string;
    /* Format: int64 */
    collectionStartDate?: number;
    /* Format: int64 */
    collectionEndDate?: number;
  };
  MoogQuestioningEventDto: {
    idManagementMonitoringInfo?: string;
    surveyUnit?: APISchemas["MoogSearchDto"];
    status?: string;
    upload?: string;
    /* Format: int64 */
    dateInfo?: number;
  };
  MoogSearchDto: {
    idContact?: string;
    idSu?: string;
    address?: string;
    campaign?: APISchemas["MoogCampaign"];
    firstName?: string;
    lastname?: string;
    batchNumber?: string;
    source?: string;
  };
  PageMoogSearchDto: {
    /* Format: int64 */
    totalElements?: number;
    /* Format: int32 */
    totalPages?: number;
    first?: boolean;
    last?: boolean;
    pageable?: APISchemas["PageableObject"];
    /* Format: int32 */
    size?: number;
    content?: Array<APISchemas["MoogSearchDto"]>;
    /* Format: int32 */
    number?: number;
    sort?: Array<APISchemas["SortObject"]>;
    /* Format: int32 */
    numberOfElements?: number;
    empty?: boolean;
  };
  HealthcheckDto: { status?: string };
  ContactPage: {
    content?: Array<APISchemas["ContactDto"]>;
    pageable?: APISchemas["PageableObject"];
    last?: boolean;
    /* Format: int64 */
    totalElements?: number;
    /* Format: int32 */
    totalPages?: number;
    first?: boolean;
    /* Format: int32 */
    size?: number;
    /* Format: int32 */
    number?: number;
    sort?: Array<APISchemas["SortObject"]>;
    /* Format: int32 */
    numberOfElements?: number;
    empty?: boolean;
  };
  ContactDetailsDto: {
    identifier: string;
    externalId?: string;
    civility?: "Female" | "Male" | "Undefined";
    lastName?: string;
    firstName?: string;
    function?: string;
    email?: string;
    phone?: string;
    otherPhone?: string;
    usualCompanyName?: string;
    address?: APISchemas["AddressDto"];
    listCampaigns?: Array<string>;
  };
  SearchContactDto: {
    firstName?: string;
    lastName?: string;
    email?: string;
    identifier?: string;
  };
  MyQuestioningDto: {
    identificationCode?: string;
    surveyWording?: string;
    surveyObjectives?: string;
    accessUrl?: string;
    mandatoryMySurveys?: boolean;
    /* Format: date-time */
    openingDate?: string;
    /* Format: date-time */
    closingDate?: string;
    /* Format: date-time */
    returnDate?: string;
    /* Format: date-time */
    questioningDate?: string;
    questioningStatus?: string;
  };
  HabilitationDto: { habilitated?: boolean };
  CampaignPage: {
    content?: Array<APISchemas["CampaignDto"]>;
    pageable?: APISchemas["PageableObject"];
    last?: boolean;
    /* Format: int64 */
    totalElements?: number;
    /* Format: int32 */
    totalPages?: number;
    first?: boolean;
    /* Format: int32 */
    size?: number;
    /* Format: int32 */
    number?: number;
    sort?: Array<APISchemas["SortObject"]>;
    /* Format: int32 */
    numberOfElements?: number;
    empty?: boolean;
  };
};

export type APIEndpoints = {
  "/api/users/{id}": {
    responses: {
      get: APISchemas["UserDto"];
      put: APISchemas["UserDto"];
      delete: null;
    };
    requests:
      | { method?: "get"; urlParams: { id: string } }
      | {
          method: "put";
          urlParams: { id: string };
          body: APISchemas["UserDto"];
        }
      | { method: "delete"; urlParams: { id: string } };
  };
  "/api/surveys/{id}": {
    responses: {
      get: APISchemas["SurveyDto"];
      put: APISchemas["SurveyDto"];
      delete: null;
    };
    requests:
      | { method?: "get"; urlParams: { id: string } }
      | {
          method: "put";
          urlParams: { id: string };
          body: APISchemas["SurveyDto"];
        }
      | { method: "delete"; urlParams: { id: string } };
  };
  "/api/survey-units/{id}": {
    responses: {
      get: APISchemas["SurveyUnitDetailsDto"];
      put: APISchemas["SurveyUnitDto"];
      delete: null;
    };
    requests:
      | { method?: "get"; urlParams: { id: string } }
      | {
          method: "put";
          urlParams: { id: string };
          body: APISchemas["SurveyUnitDto"];
        }
      | { method: "delete"; urlParams: { id: string } };
  };
  "/api/supports/{id}": {
    responses: { get: APISchemas["SupportDto"]; put: APISchemas["SupportDto"] };
    requests:
      | { method?: "get"; urlParams: { id: string } }
      | {
          method: "put";
          urlParams: { id: string };
          body: APISchemas["SupportDto"];
        };
  };
  "/api/sources/{id}": {
    responses: {
      get: APISchemas["SourceOnlineStatusDto"];
      put: APISchemas["SourceOnlineStatusDto"];
      delete: null;
    };
    requests:
      | { method?: "get"; urlParams: { id: string } }
      | {
          method: "put";
          urlParams: { id: string };
          body: APISchemas["SourceOnlineStatusDto"];
        }
      | { method: "delete"; urlParams: { id: string } };
  };
  "/api/questionings": {
    responses: {
      get: APISchemas["QuestioningWebclientDto"];
      put: APISchemas["QuestioningWebclientDto"];
      post: APISchemas["QuestioningDto"];
    };
    requests:
      | {
          method?: "get";
          query: {
            modelName: string;
            idPartitioning: string;
            idSurveyUnit: string;
          };
        }
      | { method: "put"; body: APISchemas["QuestioningWebclientDto"] }
      | { method: "post"; body: APISchemas["QuestioningDto"] };
  };
  "/api/partitionings/{id}": {
    responses: {
      get: APISchemas["PartitioningDto"];
      put: APISchemas["PartitioningDto"];
      delete: null;
    };
    requests:
      | { method?: "get"; urlParams: { id: string } }
      | {
          method: "put";
          urlParams: { id: string };
          body: APISchemas["PartitioningDto"];
        }
      | { method: "delete"; urlParams: { id: string } };
  };
  "/api/owners/{id}": {
    responses: { get: APISchemas["OwnerDto"]; put: APISchemas["OwnerDto"] };
    requests:
      | { method?: "get"; urlParams: { id: string } }
      | {
          method: "put";
          urlParams: { id: string };
          body: APISchemas["OwnerDto"];
        };
  };
  "/api/moog/campaigns/{id}": {
    responses: { put: null; delete: null };
    requests:
      | {
          method: "put";
          urlParams: { id: string };
          body: APISchemas["CampaignMoogDto"];
        }
      | { method: "delete"; urlParams: { id: string } };
  };
  "/api/metadata/{id}": {
    responses: {
      get: APISchemas["MetadataDto"];
      put: APISchemas["MetadataDto"];
    };
    requests:
      | { method?: "get"; urlParams: { id: string } }
      | {
          method: "put";
          urlParams: { id: string };
          body: APISchemas["MetadataDto"];
        };
  };
  "/api/contacts/{id}": {
    responses: { get: null; put: APISchemas["ContactDto"]; delete: null };
    requests:
      | { method?: "get"; urlParams: { id: string } }
      | {
          method: "put";
          urlParams: { id: string };
          body: APISchemas["ContactDto"];
        }
      | { method: "delete"; urlParams: { id: string } };
  };
  "/api/contacts/{id}/address": {
    responses: { get: APISchemas["AddressDto"]; put: APISchemas["AddressDto"] };
    requests:
      | { method?: "get"; urlParams: { id: string } }
      | {
          method: "put";
          urlParams: { id: string };
          body: APISchemas["AddressDto"];
        };
  };
  "/api/campaigns/{id}": {
    responses: {
      get: APISchemas["CampaignDto"];
      put: APISchemas["CampaignDto"];
      delete: null;
    };
    requests:
      | { method?: "get"; urlParams: { id: string } }
      | {
          method: "put";
          urlParams: { id: string };
          body: APISchemas["CampaignDto"];
        }
      | { method: "delete"; urlParams: { id: string } };
  };
  "/api/campaigns/{id}/params": {
    responses: { get: Array<APISchemas["ParamsDto"]>; put: null };
    requests:
      | { method?: "get"; urlParams: { id: string } }
      | {
          method: "put";
          urlParams: { id: string };
          body: APISchemas["ParamsDto"];
        };
  };
  "/api/users/contact-events": {
    responses: { post: APISchemas["UserEventDto"] };
    requests: { method: "post"; body: APISchemas["UserEventDto"] };
  };
  "/api/survey-units/{id}/comment": {
    responses: { post: APISchemas["SurveyUnitCommentInputDto"] };
    requests: {
      method: "post";
      urlParams: { id: string };
      body: APISchemas["SurveyUnitCommentInputDto"];
    };
  };
  "/api/source/{id}/source-accreditations": {
    responses: {
      get: Array<APISchemas["SourceAccreditationDto"]>;
      post: APISchemas["SourceAccreditationDto"];
    };
    requests:
      | { method?: "get"; urlParams: { id: string } }
      | {
          method: "post";
          urlParams: { id: string };
          body: APISchemas["SourceAccreditationDto"];
        };
  };
  "/api/questionings/{id}/questioning-accreditations": {
    responses: {
      get: Array<APISchemas["QuestioningAccreditationDto"]>;
      post: APISchemas["QuestioningAccreditationDto"];
    };
    requests:
      | {
          method?: "get";
          urlParams: {
            /* Format: int64 */
            id: number;
          };
        }
      | {
          method: "post";
          urlParams: {
            /* Format: int64 */
            id: number;
          };
          body: APISchemas["QuestioningAccreditationDto"];
        };
  };
  "/api/questionings/questioning-events": {
    responses: { post: APISchemas["QuestioningEventDto"] };
    requests: {
      method: "post";
      query: {
        /* Format: int64 */
        id: number;
      };
      body: APISchemas["QuestioningEventDto"];
    };
  };
  "/api/partitionings/{idPartitioning}/survey-units/{idSu}/follow-up": {
    responses: { get: APISchemas["EligibleDto"]; post: APISchemas["StateDto"] };
    requests:
      | { method?: "get"; urlParams: { idPartitioning: string; idSu: string } }
      | { method: "post"; urlParams: { idPartitioning: string; idSu: string } };
  };
  "/api/moog/campaigns/{idCampaign}/uploads": {
    responses: {
      get: APISchemas["JSONCollectionWrapperUpload"];
      post: APISchemas["ResultUpload"];
    };
    requests:
      | { method?: "get"; urlParams: { idCampaign: string } }
      | {
          method: "post";
          urlParams: { idCampaign: string };
          body: APISchemas["UploadDto"];
        };
  };
  "/api/contacts/contact-events": {
    responses: { post: APISchemas["ContactEventDto"] };
    requests: { method: "post"; body: APISchemas["ContactEventDto"] };
  };
  "/campaigns/{id}/ongoing": {
    responses: { get: APISchemas["OnGoingDto"] };
    requests: { method?: "get"; urlParams: { id: string } };
  };
  "/api/users": {
    responses: { get: APISchemas["UserPage"] };
    requests: {
      method?: "get";
      query?: {
        /* Format: int32 */
        page?: number;
        /* Format: int32 */
        size?: number;
        sort?: string;
      };
    };
  };
  "/api/users/{id}/user-events": {
    responses: { get: Array<APISchemas["UserEventDto"]> };
    requests: { method?: "get"; urlParams: { id: string } };
  };
  "/api/users/{id}/accredited-sources": {
    responses: { get: null };
    requests: { method?: "get"; urlParams: { id: string } };
  };
  "/api/users/v2": {
    responses: { get: Array<APISchemas["UserDto"]> };
    requests: { method?: "get" };
  };
  "/api/temp/moog/campaigns/{idCampaign}/monitoring/progress": {
    responses: { get: APISchemas["JSONCollectionWrapperMoogProgressDto"] };
    requests: { method?: "get"; urlParams: { idCampaign: string } };
  };
  "/api/temp/moog/campaigns/{idCampaign}/monitoring/follow-up": {
    responses: { get: APISchemas["JSONCollectionWrapperMoogFollowUpDto"] };
    requests: { method?: "get"; urlParams: { idCampaign: string } };
  };
  "/api/surveys": {
    responses: { get: APISchemas["SurveyPage"] };
    requests: {
      method?: "get";
      query?: {
        /* Format: int32 */
        page?: number;
        /* Format: int32 */
        size?: number;
        sort?: string;
      };
    };
  };
  "/api/surveys/{id}/campaigns": {
    responses: { get: Array<APISchemas["CampaignDto"]> };
    requests: { method?: "get"; urlParams: { id: string } };
  };
  "/api/surveys/{id}/campaigns-partitionings": {
    responses: { get: Array<APISchemas["CampaignPartitioningsDto"]> };
    requests: { method?: "get"; urlParams: { id: string } };
  };
  "/api/surveys/search": {
    responses: { get: APISchemas["SurveyPage"] };
    requests: {
      method?: "get";
      query?: {
        idSource?: string;
        /* Format: int32 */
        year?: number;
        periodicity?: string;
        /* Format: int32 */
        page?: number;
        /* Format: int32 */
        size?: number;
        sort?: string;
      };
    };
  };
  "/api/survey-units": {
    responses: { get: APISchemas["SurveyUnitPage"] };
    requests: {
      method?: "get";
      query?: {
        /* Format: int32 */
        page?: number;
        /* Format: int32 */
        size?: number;
        sort?: string;
      };
    };
  };
  "/api/survey-units/{id}/questionings": {
    responses: { get: Array<APISchemas["QuestioningDto"]> };
    requests: { method?: "get"; urlParams: { id: string } };
  };
  "/api/survey-units/{id}/partitionings": {
    responses: { get: Array<APISchemas["SurveyUnitPartitioningDto"]> };
    requests: {
      method?: "get";
      query?: { isFilterOpened?: boolean };
      urlParams: { id: string };
    };
  };
  "/api/survey-units/{id}/contacts": {
    responses: { get: Array<APISchemas["SearchSurveyUnitContactDto"]> };
    requests: { method?: "get"; urlParams: { id: string } };
  };
  "/api/survey-units/search": {
    responses: { get: Array<APISchemas["SearchSurveyUnitDto"]> };
    requests: {
      method?: "get";
      query?: {
        param?: string;
        /* Format: int32 */
        page?: number;
        /* Format: int32 */
        size?: number;
        sort?: string;
      };
    };
  };
  "/api/supports": {
    responses: { get: APISchemas["SupportPage"] };
    requests: {
      method?: "get";
      query?: {
        /* Format: int32 */
        page?: number;
        /* Format: int32 */
        size?: number;
        sort?: string;
      };
    };
  };
  "/api/sources": {
    responses: { get: APISchemas["SourcePage"] };
    requests: {
      method?: "get";
      query?: {
        /* Format: int32 */
        page?: number;
        /* Format: int32 */
        size?: number;
        sort?: string;
      };
    };
  };
  "/api/sources/{id}/surveys": {
    responses: { get: Array<APISchemas["SurveyDto"]> };
    requests: { method?: "get"; urlParams: { id: string } };
  };
  "/api/source/{id}/is-opened": {
    responses: { get: APISchemas["OpenDto"] };
    requests: { method?: "get"; urlParams: { id: string } };
  };
  "/api/questionings/{id}": {
    responses: { get: APISchemas["QuestioningDto"] };
    requests: {
      method?: "get";
      urlParams: {
        /* Format: int64 */
        id: number;
      };
    };
  };
  "/api/questionings/{id}/questioning-events": {
    responses: { get: Array<APISchemas["QuestioningEventDto"]> };
    requests: {
      method?: "get";
      urlParams: {
        /* Format: int64 */
        id: number;
      };
    };
  };
  "/api/questioning/{id}/assistance": {
    responses: { get: APISchemas["AssistanceDto"] };
    requests: {
      method?: "get";
      urlParams: {
        /* Format: int64 */
        id: number;
      };
    };
  };
  "/api/questioning/informations/{idCampaign}/{idUE}": {
    responses: { get: null };
    requests: {
      method?: "get";
      query?: { role?: string };
      urlParams: { idCampaign: string; idUE: string };
    };
  };
  "/api/periods": {
    responses: { get: Array<APISchemas["PeriodDto"]> };
    requests: { method?: "get" };
  };
  "/api/periodicities": {
    responses: { get: Array<APISchemas["PeriodicityDto"]> };
    requests: { method?: "get" };
  };
  "/api/periodicities/{periodicity}/periods": {
    responses: { get: Array<APISchemas["PeriodDto"]> };
    requests: { method?: "get"; urlParams: { periodicity: string } };
  };
  "/api/partitionings/{idPartitioning}/survey-units/{idSu}/state": {
    responses: { get: APISchemas["StateDto"] };
    requests: {
      method?: "get";
      urlParams: { idPartitioning: string; idSu: string };
    };
  };
  "/api/partitionings/{idPartitioning}/survey-units/{idSu}/extract": {
    responses: { get: APISchemas["EligibleDto"] };
    requests: {
      method?: "get";
      urlParams: { idPartitioning: string; idSu: string };
    };
  };
  "/api/owners": {
    responses: { get: APISchemas["OwnerPage"] };
    requests: {
      method?: "get";
      query?: {
        /* Format: int32 */
        page?: number;
        /* Format: int32 */
        size?: number;
        sort?: string;
      };
    };
  };
  "/api/owners/{id}/sources": {
    responses: { get: Array<APISchemas["SourceDto"]> };
    requests: { method?: "get"; urlParams: { id: string } };
  };
  "/api/moog/readonly/campaigns/{idCampaign}/survey-unit/{surveyUnitId}": {
    responses: { get: string };
    requests: {
      method?: "get";
      urlParams: { idCampaign: string; surveyUnitId: string };
    };
  };
  "/api/moog/contact/{id}/mail": {
    responses: { get: string };
    requests: { method?: "get"; urlParams: { id: string } };
  };
  "/api/moog/campaigns": {
    responses: { get: null };
    requests: { method?: "get" };
  };
  "/api/moog/campaigns/{idCampaign}/survey-units/follow-up": {
    responses: { get: APISchemas["JSONCollectionWrapperMoogExtractionRowDto"] };
    requests: { method?: "get"; urlParams: { idCampaign: string } };
  };
  "/api/moog/campaigns/{idCampaign}/monitoring/progress": {
    responses: { get: APISchemas["JSONCollectionWrapperMoogProgressDto"] };
    requests: { method?: "get"; urlParams: { idCampaign: string } };
  };
  "/api/moog/campaigns/{idCampaign}/monitoring/follow-up": {
    responses: { get: APISchemas["JSONCollectionWrapperMoogFollowUpDto"] };
    requests: { method?: "get"; urlParams: { idCampaign: string } };
  };
  "/api/moog/campaigns/{idCampaign}/extraction": {
    responses: { get: APISchemas["JSONCollectionWrapperMoogExtractionRowDto"] };
    requests: { method?: "get"; urlParams: { idCampaign: string } };
  };
  "/api/moog/campaigns/{campaign}/survey-units/{id}/management-monitoring-infos": {
    responses: { get: Array<APISchemas["MoogQuestioningEventDto"]> };
    requests: { method?: "get"; urlParams: { campaign: string; id: string } };
  };
  "/api/moog/campaigns/survey-units": {
    responses: { get: null };
    requests: {
      method?: "get";
      query?: {
        filter1?: string;
        filter2?: string;
        /* Format: int32 */
        pageNo?: number;
        /* Format: int32 */
        pageSize?: number;
      };
    };
  };
  "/api/main-contact": {
    responses: { get: APISchemas["ContactDto"] };
    requests: {
      method?: "get";
      query: { partitioning: string; "survey-unit": string };
    };
  };
  "/api/healthcheck": {
    responses: { get: APISchemas["HealthcheckDto"] };
    requests: { method?: "get" };
  };
  "/api/contacts": {
    responses: { get: APISchemas["ContactPage"] };
    requests: {
      method?: "get";
      query?: {
        /* Format: int32 */
        page?: number;
        /* Format: int32 */
        size?: number;
        sort?: string;
      };
    };
  };
  "/api/contacts/{id}/contact-events": {
    responses: { get: Array<APISchemas["ContactEventDto"]> };
    requests: { method?: "get"; urlParams: { id: string } };
  };
  "/api/contacts/search": {
    responses: { get: Array<APISchemas["SearchContactDto"]> };
    requests: {
      method?: "get";
      query?: {
        param?: string;
        /* Format: int32 */
        page?: number;
        /* Format: int32 */
        pageSize?: number;
        sort?: string;
      };
    };
  };
  "/api/contacts/questionings": {
    responses: { get: APISchemas["MyQuestioningDto"][] };
    requests: { method?: "get"; query: { idec: string } };
  };
  "/api/check-habilitation": {
    responses: { get: APISchemas["HabilitationDto"] };
    requests: {
      method?: "get";
      query: { role?: string; id: string; campaign: string };
    };
  };
  "/api/campaigns": {
    responses: { get: APISchemas["CampaignPage"] };
    requests: {
      method?: "get";
      query?: {
        /* Format: int32 */
        page?: number;
        /* Format: int32 */
        size?: number;
        sort?: string;
      };
    };
  };
  "/api/campaigns/{id}/partitionings": {
    responses: { get: Array<APISchemas["PartitioningDto"]> };
    requests: { method?: "get"; urlParams: { id: string } };
  };
  "/api/users/user-events/{id}": {
    responses: { delete: string };
    requests: {
      method: "delete";
      urlParams: {
        /* Format: int64 */
        id: number;
      };
    };
  };
  "/api/moog/uploads/{id}": {
    responses: { delete: null };
    requests: {
      method: "delete";
      urlParams: {
        /* Format: int64 */
        id: number;
      };
    };
  };
  "/api/moog/management-monitoring-infos/{id}": {
    responses: { delete: object };
    requests: {
      method: "delete";
      urlParams: {
        /* Format: int64 */
        id: number;
      };
    };
  };
  "/api/questionings/questioning-events/{id}": {
    responses: { delete: object };
    requests: {
      method: "delete";
      urlParams: {
        /* Format: int64 */
        id: number;
      };
    };
  };
  "/api/contacts/contact-events/{id}": {
    responses: { delete: null };
    requests: {
      method: "delete";
      urlParams: {
        /* Format: int64 */
        id: number;
      };
    };
  };
};

export type APIPaths = keyof APIEndpoints;

export type APIRequests<T extends APIPaths> = APIEndpoints[T]["requests"];

export type APIMethods<T extends APIPaths> = NonNullable<APIRequests<T>["method"]>;

export type APIRequest<T extends APIPaths, M extends APIMethods<T>> = Omit<
  {
    [MM in APIMethods<T>]: APIRequests<T> & { method: MM };
  }[M],
  "method"
> & { method?: M };

type DefaultToGet<T extends string | undefined> = T extends string ? T : "get";

export type APIResponse<T extends APIPaths, M extends string | undefined> =
  DefaultToGet<M> extends keyof APIEndpoints[T]["responses"]
    ? APIEndpoints[T]["responses"][DefaultToGet<M>]
    : never;
