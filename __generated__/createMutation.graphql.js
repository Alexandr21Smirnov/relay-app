/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type createMutationVariables = {|
  name: string,
  description: string,
  price: number,
|};
export type createMutationResponse = {|
  +createProduct: {|
    +name: string,
    +description: string,
    +price: number,
  |}
|};
export type createMutation = {|
  variables: createMutationVariables,
  response: createMutationResponse,
|};
*/


/*
mutation createMutation(
  $name: String!
  $description: String!
  $price: Float!
) {
  createProduct(input: {name: $name, description: $description, price: $price}) {
    name
    description
    price
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "price"
},
v3 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description"
      },
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      {
        "kind": "Variable",
        "name": "price",
        "variableName": "price"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "price",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "createMutation",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Product",
        "kind": "LinkedField",
        "name": "createProduct",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "createMutation",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Product",
        "kind": "LinkedField",
        "name": "createProduct",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "37a29ba5192fde172541fcc38714ff18",
    "id": null,
    "metadata": {},
    "name": "createMutation",
    "operationKind": "mutation",
    "text": "mutation createMutation(\n  $name: String!\n  $description: String!\n  $price: Float!\n) {\n  createProduct(input: {name: $name, description: $description, price: $price}) {\n    name\n    description\n    price\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '96b6ecac2c75af3dd7549724290e1e83';

module.exports = node;
