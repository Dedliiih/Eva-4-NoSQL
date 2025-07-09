import { Controller, Get, Render, Redirect, Post, Body, Param } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create.client-dto';
import { Client, ClientDocument } from './schemas/client.schema';
import { UpdateClientDto } from './dto/update.client-dto';

@Controller('clientes')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}
  @Get()
  @Render('clients.hbs')
  async getClients(): Promise<{ clients: Client[] }> {
    const clients = await this.clientsService.getClients();
    return { clients };
  }

  @Get('crear')
  @Render('create-client.hbs')
  async getCreateClient() {}

  @Post()
  @Redirect('/clientes')
  async createClient(@Body() createClientDto: CreateClientDto): Promise<ClientDocument> {
    return await this.clientsService.createClient(createClientDto);
  }

  @Post('/eliminar/:id')
  @Redirect('/clientes')
  async deleteClient(@Param('id') clientId: string) {
    return await this.clientsService.deleteClient(clientId);
  }

  @Get('/editar/:id')
  @Render('edit-client.hbs')
  async getEditClient(@Param('id') clientId: string): Promise<{ client: Client | null }> {
    const client = await this.clientsService.getClientById(clientId);
    return { client };
  }

  @Post('/editar/:id')
  @Redirect('/clientes')
  async editClient(@Param('id') clientId: string, @Body() updateClientDto: UpdateClientDto) {
    return await this.clientsService.editClient(clientId, updateClientDto);
  }
}
