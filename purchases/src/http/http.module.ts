import path from 'node:path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';

import { MessagingModule } from 'src/messaging/messaging.module';

import { ProductsService } from 'src/services/products.service';
import { PurchasesService } from 'src/services/purchases.service';
import { CustomersService } from 'src/services/customers.service';

import { DatabaseModule } from '../database/database.module';

import { ProductsResolver } from './graphql/resolvers/products.resolver';
import { PurchasesResolver } from './graphql/resolvers/purchases.resolver';
import { CustomersResolver } from './graphql/resolvers/customers.resolver';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    MessagingModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    // Resolvers
    ProductsResolver,
    PurchasesResolver,
    CustomersResolver,

    // Services
    ProductsService,
    PurchasesService,
    CustomersService,
  ],
})
export class HttpModule {}
