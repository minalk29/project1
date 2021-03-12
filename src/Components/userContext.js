import React, { Component } from 'react';

const ProductContext =React.createContext();

const ProductProvider =ProductContext.Provider
const ProductConsumer =ProductContext.Consumer

export {ProductConsumer, ProductProvider}