(this["webpackJsonpopenapi-mock-generator"]=this["webpackJsonpopenapi-mock-generator"]||[]).push([[4],{1962:function(e,t){},2087:function(e,t,n){"use strict";n.r(t);var a=n(19),r=n(2078),i=n(2075),o=n(0),s=n.n(o),c=n(20),p=n(38),m=n(93),u=n(904),d=n(905),f=n.n(d),l=n(3),h=n(10),y=n(15),g=n(1952),b=n.n(g),j=n(373),O=n.n(j),v=n(166),x=n(864),k=n.n(x),N=n(78),S=n(47),$=n(109);function _(){var e=Object(a.a)(["\n  height: 100%;\n  overflow-y: hidden;\n"]);return _=function(){return e},e}var w=c.a.div(_()),P={minimap:{enabled:!1},lineNumbers:"off",wordWrap:"on",tabSize:2},E=n(85);function R(){var e=Object(E.h)().referenceName;return decodeURIComponent(null!==e&&void 0!==e?e:"")}var C=n(2086);function I(e){var t=Object(o.useRef)(null);return Object(C.a)(t,(function(){window.requestAnimationFrame((function(){e.current&&e.current.layout()}))})),t}b.a.extend("faker",(function(){return f.a})),b.a.extend("chance",(function(){return new u.Chance})),b.a.option("alwaysFakeOptionals",!0),b.a.option("failOnInvalidFormat",!1);var M=function(){var e=R(),t=Object(N.c)($.b),n=Object(N.c)((function(n){if(t&&e)return JSON.stringify(Object(S.b)(e,t))})),a=Object(o.useState)(" "),r=Object(p.a)(a,2),i=r[0],c=r[1],u=Object(o.useRef)();Object(o.useEffect)((function(){if(t&&n){var e=JSON.parse(n);(function(e,t){var n;if(0===Object.keys(e).length)return y.g("");var a=null===(n=t.components)||void 0===n?void 0:n.schemas,r=Object(m.a)({},e,{components:{schemas:Object(v.a)(a)}});return Object(h.a)(y.h((function(){return O.a.dereference(r)}),l.n),y.a((function(e){return y.b(l.o((function(){return b.a.generate(e)}),l.n))})),y.e((function(e){return JSON.stringify(e,null,2)})))})(S.g.is(e)?Object(v.a)(Object(S.b)(e.$ref,t)):e,t)().then((function(e){l.h(e)?c(e.right):console.error(e.left)}))}}),[t,n]);var d=I(u),f=Object(m.a)({},P,{ariaLabel:"generated model",readOnly:!0});return s.a.createElement(w,{"data-testid":"generated-editor",ref:d},s.a.createElement(k.a,{language:"json",value:i,options:f,editorDidMount:function(e){u.current=e,e.focus()}}))},D=n(2071),q=n(800),z=n(162),A=["bool","falsy","animal","character","floating","integer","natural","prime","is_prime","hex","letter","string","template","buffer","capitalize","mixin","unique","n","pad","pick","pickone","pickset","shuffle","weighted","paragraph","sentence","syllable","word","age","birthday","cpf","cnpj","first","profession","company","gender","last","israelId","mrz","name","prefix","name_prefix","HIDN","ssn","aadhar","name_suffixes","suffix","name_suffix","nationalities","nationality","android_id","apple_token","wp8_anid2","wp7_anid","bb_pin","avatar","color","domain","email","fbid","google_analytics","hashtag","ip","ipv6","klout","semver","tlds","tld","twitter","url","port","locale","locales","loremPicsum","address","altitude","areacode","city","coordinates","countries","country","depth","geohash","geojson","latitude","longitude","phone","postal","postcode","counties","county","province","state","street","zip","ampm","date","hammertime","hour","millisecond","second","minute","month","timestamp","weekday","year","cc","cc_type","currency_types","currency","timezones","timezone","currency_pair","dollar","euro","exp","exp_month","exp_year","vat","iban","it_vat","cf","pl_pesel","pl_nip","pl_regon","note","midi_note","chord_quality","chord","tempo","coin","d4","d6","d8","d10","d12","d20","d30","d100","rpg","guid","hash","luhn_check","luhn_calculate","md5","file","get","mac_address","normal","normal_pool","radio","set","tv","emotion","blueimp_md5"],L=["random.number","random.arrayElement","random.objectElement","random.uuid","random.boolean","random.word","random.words","random.image","random.locale","random.alphaNumeric","helpers.randomize","helpers.slugify","helpers.replaceSymbolWithNumber","helpers.replaceSymbols","helpers.shuffle","helpers.mustache","helpers.createCard","helpers.contextualCard","helpers.userCard","helpers.createTransaction","name.firstName","name.lastName","name.findName","name.jobTitle","name.prefix","name.suffix","name.title","name.jobDescriptor","name.jobArea","name.jobType","address.zipCode","address.city","address.cityPrefix","address.citySuffix","address.streetName","address.streetAddress","address.streetSuffix","address.streetPrefix","address.secondaryAddress","address.county","address.country","address.countryCode","address.state","address.stateAbbr","address.latitude","address.longitude","company.suffixes","company.companyName","company.companySuffix","company.catchPhrase","company.bs","company.catchPhraseAdjective","company.catchPhraseDescriptor","company.catchPhraseNoun","company.bsAdjective","company.bsBuzz","company.bsNoun","finance.account","finance.accountName","finance.mask","finance.amount","finance.transactionType","finance.currencyCode","finance.currencyName","finance.currencySymbol","finance.bitcoinAddress","finance.iban","finance.bic","image.image","image.avatar","image.imageUrl","image.abstract","image.animals","image.business","image.cats","image.city","image.food","image.nightlife","image.fashion","image.people","image.nature","image.sports","image.technics","image.transport","image.dataUri","lorem.word","lorem.words","lorem.sentence","lorem.slug","lorem.sentences","lorem.paragraph","lorem.paragraphs","lorem.text","lorem.lines","hacker.abbreviation","hacker.adjective","hacker.noun","hacker.verb","hacker.ingverb","hacker.phrase","internet.avatar","internet.email","internet.exampleEmail","internet.userName","internet.protocol","internet.url","internet.domainName","internet.domainSuffix","internet.domainWord","internet.ip","internet.ipv6","internet.userAgent","internet.color","internet.mac","internet.password","database.column","database.type","database.collation","database.engine","phone.phoneNumber","phone.phoneNumberFormat","phone.phoneFormats","date.past","date.future","date.between","date.recent","date.month","date.weekday","commerce.color","commerce.department","commerce.productName","commerce.price","commerce.productAdjective","commerce.productMaterial","commerce.product","system.fileName","system.commonFileName","system.mimeType","system.commonFileType","system.commonFileExt","system.fileType","system.fileExt","system.directoryPath","system.filePath","system.semver"],F=L.reduce((function(e,t){return Object(m.a)({},e,Object(z.a)({},t,{type:"array"}))}),{}),T=A.reduce((function(e,t){return Object(m.a)({},e,Object(z.a)({},t,{oneOf:[{type:"array"},{type:"object"}]}))}),{}),J={validate:!0,schemas:[{uri:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/SchemaOrReference",fileMatch:["*"],schema:{oneOf:[{$ref:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/Schema"},{$ref:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/Reference"}]}},{uri:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/Schema",schema:{type:"object",properties:{"x-faker":{$ref:"https://github.com/Marak/faker.js/Schema"},"x-chance":{$ref:"https://chancejs.com/Schema"},title:{type:"string"},multipleOf:{type:"number",minimum:0,exclusiveMinimum:!0},maximum:{type:"number"},exclusiveMaximum:{type:"boolean",default:!1},minimum:{type:"number"},exclusiveMinimum:{type:"boolean",default:!1},maxLength:{type:"integer",minimum:0},minLength:{type:"integer",minimum:0,default:0},pattern:{type:"string",format:"regex"},maxItems:{type:"integer",minimum:0},minItems:{type:"integer",minimum:0,default:0},uniqueItems:{type:"boolean",default:!1},maxProperties:{type:"integer",minimum:0},minProperties:{type:"integer",minimum:0,default:0},required:{type:"array",items:{type:"string"},minItems:1,uniqueItems:!0},enum:{type:"array",items:{},minItems:1,uniqueItems:!1},type:{type:"string",enum:["array","boolean","integer","number","object","string"]},not:{oneOf:[{$ref:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/Schema"},{$ref:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/Reference"}]},allOf:{type:"array",items:{oneOf:[{$ref:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/Schema"},{$ref:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/Reference"}]}},oneOf:{type:"array",items:{oneOf:[{$ref:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/Schema"},{$ref:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/Reference"}]}},anyOf:{type:"array",items:{oneOf:[{$ref:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/Schema"},{$ref:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/Reference"}]}},items:{oneOf:[{$ref:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/Schema"},{$ref:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/Reference"}]},properties:{type:"object",additionalProperties:{oneOf:[{$ref:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/Schema"},{$ref:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/Reference"}]}},additionalProperties:{oneOf:[{$ref:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/Schema"},{$ref:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/Reference"},{type:"boolean"}],default:!0},description:{type:"string"},format:{type:"string"},default:{},nullable:{type:"boolean",default:!1},discriminator:{$ref:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/Discriminator"},readOnly:{type:"boolean",default:!1},writeOnly:{type:"boolean",default:!1},example:{},externalDocs:{$ref:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/ExternalDocumentation"},deprecated:{type:"boolean",default:!1},xml:{$ref:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/XML"}},patternProperties:{"^x-":{}},additionalProperties:!1}},{uri:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/Reference",schema:{type:"object",required:["$ref"],patternProperties:{"^\\$ref$":{type:"string",format:"uri-reference"}}}},{uri:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/Discriminator",schema:{type:"object",required:["propertyName"],properties:{propertyName:{type:"string"},mapping:{type:"object",additionalProperties:{type:"string"}}}}},{uri:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/ExternalDocumentation",schema:{type:"object",required:["url"],properties:{description:{type:"string"},url:{type:"string",format:"uri-reference"}},patternProperties:{"^x-":{}},additionalProperties:!1}},{uri:"https://spec.openapis.org/oas/3.0/schema/2019-04-02/definitions/XML",schema:{type:"object",properties:{name:{type:"string"},namespace:{type:"string",format:"uri"},prefix:{type:"string"},attribute:{type:"boolean",default:!1},wrapped:{type:"boolean",default:!1}},patternProperties:{"^x-":{}},additionalProperties:!1}},{uri:"https://github.com/Marak/faker.js/Schema",schema:{oneOf:[{type:"string",enum:L},{type:"object",properties:Object(m.a)({fake:{type:"array",items:{type:"string"}}},F)}]}},{uri:"https://chancejs.com/Schema",schema:{oneOf:[{type:"string",enum:A},{type:"object",properties:T}]}}]},U=function(){var e=Object(N.c)($.b),t=Object(N.b)(),n=R(),a=Object(E.h)(),r=a.projectId,i=a.projectName,c=Object(E.f)(),u=Object(o.useState)(" "),d=Object(p.a)(u,2),f=d[0],l=d[1],h=Object(o.useRef)();Object(o.useEffect)((function(){if(e&&n){var t=JSON.stringify(Object(S.b)(n,e),null,2);l(t)}}),[n]);var y=I(h),g=Object(o.useRef)(null);Object(o.useEffect)((function(){var e=q.languages.registerCodeLensProvider("json",{provideCodeLenses:function(e){return null==g.current?{lenses:[],dispose:function(){}}:{lenses:e.findMatches('"\\$ref":\\s*"(#.*)"',!1,!0,!1,null,!0).map((function(e){var t;return{range:e.range,command:{title:"Go to reference",id:g.current,arguments:[null===(t=e.matches)||void 0===t?void 0:t[1]]}}})),dispose:function(){}}},resolveCodeLens:function(e,t){return t}});return function(){e.dispose()}}),[]);var b=Object(m.a)({},P,{ariaLabel:"current schema editor"});return s.a.createElement(w,{"data-testid":"schema-editor",ref:y},s.a.createElement(k.a,{language:"json",value:f,onChange:Object(D.a)((function(e){n&&(l(e),t(Object($.e)({ref:n,value:e})))}),100),editorWillMount:function(e){e.languages.json.jsonDefaults.setDiagnosticsOptions(J)},editorDidMount:function(e){h.current=e,e.focus(),g.current=h.current.addCommand(0,(function(e,t){c.push("/".concat(r,"/").concat(i,"/").concat(encodeURIComponent(t)))}))},options:b}))};function W(){var e=Object(a.a)(["\n  height: 100%;\n"]);return W=function(){return e},e}function X(){var e=Object(a.a)(["\n  height: 100%;\n"]);return X=function(){return e},e}var B=Object(c.a)(i.a)(X()),G=Object(c.a)(r.a)(W());t.default=function(){return s.a.createElement(B,null,s.a.createElement(G,{span:12},s.a.createElement(U,null)),s.a.createElement(G,{span:12},s.a.createElement(M,null)))}}}]);
//# sourceMappingURL=4.a2fbe845.chunk.js.map