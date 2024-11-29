export const ABI = [
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "_userRoleManager",
              "type": "address"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "manufacturerAddress",
              "type": "address"
          }
      ],
      "name": "ManufacturerDeregistered",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "manufacturerAddress",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "string",
              "name": "brandName",
              "type": "string"
          },
          {
              "indexed": true,
              "internalType": "string",
              "name": "nafdac_no",
              "type": "string"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "registration_no",
              "type": "string"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "yearOfRegistration",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "location",
              "type": "string"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "state",
              "type": "string"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "image",
              "type": "string"
          }
      ],
      "name": "ManufacturerRegistered",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "address",
              "name": "manufacturerAddress",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "brandName",
              "type": "string"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "nafdac_no",
              "type": "string"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "registration_no",
              "type": "string"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "yearOfRegistration",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "location",
              "type": "string"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "state",
              "type": "string"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "image",
              "type": "string"
          }
      ],
      "name": "ManufacturerUpdated",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "buyer",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "productCode",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "totalPrice",
              "type": "uint256"
          }
      ],
      "name": "OrderReceived",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "productCode",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "enum ProductManagement.ProductStatus",
              "name": "newStatus",
              "type": "uint8"
          }
      ],
      "name": "OrderReceivedusUpdated",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "productId",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "actor",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "string",
              "name": "action",
              "type": "string"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "string",
              "name": "details",
              "type": "string"
          }
      ],
      "name": "ProductActionLogged",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "productCode",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "trackingID",
              "type": "uint256"
          }
      ],
      "name": "ProductAdded",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "productCode",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "buyer",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
          }
      ],
      "name": "ProductOrder",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "productId",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "buyer",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "quantity",
              "type": "uint256"
          }
      ],
      "name": "ProductSold",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "productCode",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "enum ProductManagement.ProductStatus",
              "name": "newStatus",
              "type": "uint8"
          }
      ],
      "name": "ProductStatusUpdated",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "productCode",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
          }
      ],
      "name": "ProductTransferred",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "productCode",
              "type": "uint256"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "newQuantity",
              "type": "uint256"
          }
      ],
      "name": "ProductUpdated",
      "type": "event"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_productCode",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "_name",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "_price",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "_batchID",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "_expiryDate",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "_productDescription",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "_batchQuantity",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "_productImage",
              "type": "string"
          }
      ],
      "name": "addProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_productCode",
              "type": "uint256"
          }
      ],
      "name": "checkProductAvailability",
      "outputs": [
          {
              "internalType": "string",
              "name": "name",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "productImage",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "description",
              "type": "string"
          },
          {
              "internalType": "address",
              "name": "_owner",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "productCode",
              "type": "uint256"
          }
      ],
      "name": "checkProductExpiration",
      "outputs": [
          {
              "internalType": "bool",
              "name": "isExpired",
              "type": "bool"
          },
          {
              "internalType": "uint256",
              "name": "expiryDate",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "getAllManufacturers",
      "outputs": [
          {
              "internalType": "address[]",
              "name": "",
              "type": "address[]"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "getAllProducts",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "productCode",
                      "type": "uint256"
                  },
                  {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                  },
                  {
                      "internalType": "uint256",
                      "name": "price",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "batchID",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "expiryDate",
                      "type": "uint256"
                  },
                  {
                      "internalType": "string",
                      "name": "productDescription",
                      "type": "string"
                  },
                  {
                      "internalType": "uint256",
                      "name": "batchQuantity",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "availableQuantity",
                      "type": "uint256"
                  },
                  {
                      "internalType": "string",
                      "name": "productImage",
                      "type": "string"
                  },
                  {
                      "internalType": "enum ProductManagement.ProductStatus",
                      "name": "status",
                      "type": "uint8"
                  },
                  {
                      "internalType": "address",
                      "name": "owner",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "trackingID",
                      "type": "uint256"
                  }
              ],
              "internalType": "struct ProductManagement.Product[]",
              "name": "",
              "type": "tuple[]"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "itemID",
              "type": "uint256"
          }
      ],
      "name": "getItemDetails",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "productCode",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "batchID",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "_owner",
              "type": "address"
          },
          {
              "internalType": "enum ProductManagement.ProductStatus",
              "name": "status",
              "type": "uint8"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "productCode",
              "type": "uint256"
          }
      ],
      "name": "getProductByCode",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "productCode",
                      "type": "uint256"
                  },
                  {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                  },
                  {
                      "internalType": "uint256",
                      "name": "price",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "batchID",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "expiryDate",
                      "type": "uint256"
                  },
                  {
                      "internalType": "string",
                      "name": "productDescription",
                      "type": "string"
                  },
                  {
                      "internalType": "uint256",
                      "name": "batchQuantity",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "availableQuantity",
                      "type": "uint256"
                  },
                  {
                      "internalType": "string",
                      "name": "productImage",
                      "type": "string"
                  },
                  {
                      "internalType": "enum ProductManagement.ProductStatus",
                      "name": "status",
                      "type": "uint8"
                  },
                  {
                      "internalType": "address",
                      "name": "owner",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "trackingID",
                      "type": "uint256"
                  }
              ],
              "internalType": "struct ProductManagement.Product",
              "name": "",
              "type": "tuple"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "productCode",
              "type": "uint256"
          }
      ],
      "name": "getProductDetails",
      "outputs": [
          {
              "internalType": "string",
              "name": "name",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "batchID",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "expiryDate",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "productDescription",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "availableQuantity",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "productImage",
              "type": "string"
          },
          {
              "internalType": "enum ProductManagement.ProductStatus",
              "name": "status",
              "type": "uint8"
          },
          {
              "internalType": "address",
              "name": "_owner",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "trackingID",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "productId",
              "type": "uint256"
          }
      ],
      "name": "getProductHistory",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "address",
                      "name": "actor",
                      "type": "address"
                  },
                  {
                      "internalType": "string",
                      "name": "action",
                      "type": "string"
                  },
                  {
                      "internalType": "uint256",
                      "name": "timestamp",
                      "type": "uint256"
                  },
                  {
                      "internalType": "string",
                      "name": "details",
                      "type": "string"
                  }
              ],
              "internalType": "struct ProductManagement.ProductHistoryEntry[]",
              "name": "",
              "type": "tuple[]"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "getProductLength",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "getProductsByManufacturer",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "productCode",
                      "type": "uint256"
                  },
                  {
                      "internalType": "string",
                      "name": "name",
                      "type": "string"
                  },
                  {
                      "internalType": "uint256",
                      "name": "price",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "batchID",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "expiryDate",
                      "type": "uint256"
                  },
                  {
                      "internalType": "string",
                      "name": "productDescription",
                      "type": "string"
                  },
                  {
                      "internalType": "uint256",
                      "name": "batchQuantity",
                      "type": "uint256"
                  },
                  {
                      "internalType": "uint256",
                      "name": "availableQuantity",
                      "type": "uint256"
                  },
                  {
                      "internalType": "string",
                      "name": "productImage",
                      "type": "string"
                  },
                  {
                      "internalType": "enum ProductManagement.ProductStatus",
                      "name": "status",
                      "type": "uint8"
                  },
                  {
                      "internalType": "address",
                      "name": "owner",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "trackingID",
                      "type": "uint256"
                  }
              ],
              "internalType": "struct ProductManagement.Product[]",
              "name": "",
              "type": "tuple[]"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "historyLogs",
      "outputs": [
          {
              "internalType": "address",
              "name": "actor",
              "type": "address"
          },
          {
              "internalType": "string",
              "name": "action",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "details",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "isAvailable",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "isVerified",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "itemDetails",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "itemID",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "productCode",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "batchID",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
          {
              "internalType": "enum ProductManagement.ProductStatus",
              "name": "status",
              "type": "uint8"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "manufacturerAddresses",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "name": "manufacturers",
      "outputs": [
          {
              "internalType": "string",
              "name": "brandName",
              "type": "string"
          },
          {
              "internalType": "bool",
              "name": "verify",
              "type": "bool"
          },
          {
              "internalType": "string",
              "name": "nafdac_no",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "registration_no",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "yearOfRegistration",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "location",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "state",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "image",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "totalProducts",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "productId",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "numberOfUnits",
              "type": "uint256"
          }
      ],
      "name": "markProductAsSold",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "nextItemID",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "productId",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "numberOfUnits",
              "type": "uint256"
          }
      ],
      "name": "orderProduct",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "owner",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "productDetails",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "productCode",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "name",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "batchID",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "expiryDate",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "productDescription",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "batchQuantity",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "availableQuantity",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "productImage",
              "type": "string"
          },
          {
              "internalType": "enum ProductManagement.ProductStatus",
              "name": "status",
              "type": "uint8"
          },
          {
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "trackingID",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "productHistories",
      "outputs": [
          {
              "internalType": "address",
              "name": "actor",
              "type": "address"
          },
          {
              "internalType": "string",
              "name": "action",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "details",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "productID",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "productCode",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "name",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "batchID",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "expiryDate",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "productDescription",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "batchQuantity",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "availableQuantity",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "productImage",
              "type": "string"
          },
          {
              "internalType": "enum ProductManagement.ProductStatus",
              "name": "status",
              "type": "uint8"
          },
          {
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "trackingID",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "products",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "productCode",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "name",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "batchID",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "expiryDate",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "productDescription",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "batchQuantity",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "availableQuantity",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "productImage",
              "type": "string"
          },
          {
              "internalType": "enum ProductManagement.ProductStatus",
              "name": "status",
              "type": "uint8"
          },
          {
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "trackingID",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "brandName",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "nafdac_no",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "registration_no",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "yearOfRegistration",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "location",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "state",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "image",
              "type": "string"
          }
      ],
      "name": "registerManufacturer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "productId",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
          }
      ],
      "name": "transferProductOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "productCode",
              "type": "uint256"
          },
          {
              "internalType": "enum ProductManagement.ProductStatus",
              "name": "newStatus",
              "type": "uint8"
          }
      ],
      "name": "updateProductStatus",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "productId",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "newQuantity",
              "type": "uint256"
          }
      ],
      "name": "updateProductStock",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "userRoleManager",
      "outputs": [
          {
              "internalType": "contract UserRoleManager",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  }
]