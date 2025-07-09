import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client, ClientDocument } from './schemas/client.schema';
import { Model } from 'mongoose';
import { CreateClientDto } from './dto/create.client-dto';
import { UpdateClientDto } from './dto/update.client-dto';

@Injectable()
export class ClientsService {
  constructor(@InjectModel(Client.name) private clientModel: Model<Client>) {}

  async getClients(): Promise<Client[]> {
    return await this.clientModel.find().exec();
  }

  async getClientById(clientId: string): Promise<Client | null> {
    return await this.clientModel.findById(clientId).exec();
  }

  async createClient(createClientDto: CreateClientDto): Promise<ClientDocument> {
    const newClient = new this.clientModel(createClientDto);
    return newClient.save();
  }

  async deleteClient(clientId: string) {
    return await this.clientModel.findByIdAndDelete(clientId);
  }

  async editClient(clientId: string, updateClientDto: UpdateClientDto) {
    return await this.clientModel.findByIdAndUpdate(clientId, updateClientDto);
  }
}
