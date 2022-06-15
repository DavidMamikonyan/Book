import React from "react";
import {Edit, BooleanField, SimpleForm, NumberField, TextInput, ReferenceInput, SelectInput} from 'react-admin';

export default (props) => (
    <Edit title='Edit post' {...props}  >
        <SimpleForm>
            <TextInput disabled source="id" style={{"maxWidth": "1000px", "width": "100%"}}/>
            <TextInput source="nameEnglish" style={{"maxWidth": "1000px", "width": "100%"}}/>
            <TextInput source="nameArabic" style={{"maxWidth": "1000px", "width": "100%"}}/>
            <TextInput source="descriptionEnglish" style={{"maxWidth": "1000px", "width": "100%"}}/>
            <TextInput source="descriptionArabic" style={{"maxWidth": "1000px", "width": "100%"}}/>
            <TextInput source="authorEnglish" style={{"maxWidth": "1000px", "width": "100%"}}/>
            <TextInput source="authorArabic" style={{"maxWidth": "1000px", "width": "100%"}}/>
            {/* <TextInput source="imageLink" style={{"maxWidth": "1000px", "width": "100%"}}/> */}
        </SimpleForm>
    </Edit>
);





















































// import { stringify } from "query-string";
// import {fetchUtils,GET_LIST,GET_ONE,GET_MANY, GET_MANY_REFERENCE,CREATE,UPDATE,UPDATE_MANY,DELETE,DELETE_MANY
// } from "react-admin";
//
// export default (apiUrl, httpClient = fetchUtils.fetchJson) => {
//     const convertDataRequestToHTTP = (type, resource, params) => {
//         let url = "";
//         const options = {};
//         switch (type) {
//             case GET_LIST: {
//                 const { page, perPage } = params.pagination;
//                 const { field, order } = params.sort;
//                 const query = {
//                     sort: JSON.stringify([field, order]),
//                     range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
//                     filter: JSON.stringify(params.filter)
//                 };
//                 url = `${apiUrl}/${resource}?${stringify(query)}`;
//                 break;
//             }
//             case GET_ONE:
//                 url = `${apiUrl}/${resource}/${params.id}`;
//                 break;
//             case GET_MANY: {
//                 const query = {
//                     filter: JSON.stringify({ id: params.ids })
//                 };
//                 url = `${apiUrl}/${resource}?${stringify(query)}`;
//                 break;
//             }
//             case GET_MANY_REFERENCE: {
//                 const { page, perPage } = params.pagination;
//                 const { field, order } = params.sort;
//                 const query = {
//                     sort: JSON.stringify([field, order]),
//                     range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
//                     filter: JSON.stringify({
//                         ...params.filter,
//                         [params.target]: params.id
//                     })
//                 };
//                 url = `${apiUrl}/${resource}?${stringify(query)}`;
//                 break;
//             }
//             case UPDATE:
//                 url = `${apiUrl}/${resource}/${params.id}`;
//                 options.method = "PUT";
//                 options.body = JSON.stringify(params.data);
//                 break;
//             case CREATE:
//                 url = `${apiUrl}/${resource}`;
//                 options.method = "POST";
//                 options.body = JSON.stringify(params.data);
//                 break;
//             case DELETE:
//                 url = `${apiUrl}/${resource}/${params.id}`;
//                 options.method = "DELETE";
//                 break;
//             default:
//                 throw new Error(`Unsupported fetch action type ${type}`);
//         }
//         return { url, options };
//     };
//
//
//     const convertHTTPResponse = (response, type, resource, params) => {
//         const { headers, json } = response;
//         switch (type) {
//             case GET_LIST:
//             case GET_MANY_REFERENCE:
//                 if (!headers.has("X-Total-Count")) {
//                     throw new Error(
//                         "The Content-Range header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare Content-Range in the Access-Control-Expose-Headers header?"
//                     );
//                 }
//                 return {
//                     data: json,
//                     total: parseInt(
//                         headers
//                             .get("X-Total-Count")
//                             .split("/")
//                             .pop(),
//                         10
//                     )
//                 };
//             case CREATE:
//                 return { data: { ...params.data, id: json.id } };
//             default:
//                 return { data: json };
//         }
//     };
//     return (type, resource, params) => {
//         // simple-rest doesn't handle filters on UPDATE route, so we fallback to calling UPDATE n times instead
//         if (type === UPDATE_MANY) {
//             return Promise.all(
//                 params.ids.map(id =>
//                     httpClient(`${apiUrl}/${resource}/${id}`, {
//                         method: "PUT",
//                         body: JSON.stringify(params.data)
//                     })
//                 )
//             ).then(responses => ({
//                 data: responses.map(response => response.json)
//             }));
//         }
//         // simple-rest doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
//         if (type === DELETE_MANY) {
//             return Promise.all(
//                 params.ids.map(id =>
//                     httpClient(`${apiUrl}/${resource}/${id}`, {
//                         method: "DELETE"
//                     })
//                 )
//             ).then(responses => ({
//                 data: responses.map(response => response.json)
//             }));
//         }
//
//         const { url, options } = convertDataRequestToHTTP(type, resource, params);
//         return httpClient(url, options).then(response =>
//             convertHTTPResponse(response, type, resource, params)
//         );
//     };
//
// };
