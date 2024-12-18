package com.flowfit.sbfitflow.services;

import com.flowfit.sbfitflow.model.Client;
import com.flowfit.sbfitflow.model.ClientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    private final ClientRepository clientRepository;

    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public List<Client> findAllClients() {
        return clientRepository.findAll();
    }

    public Client getClientById(Integer id) {
        return clientRepository.findById(id).orElse(null);
    }

    public Client createClient(Client client) {
        return clientRepository.save(client);
    }

    public Client updateClient(Client client) {
        return clientRepository.save(client);
    }
    public void activateClient(Integer id) {
        Client client = getClientById(id);
        if (client != null) {
            client.setStatus(Client.ClientStatus.ACTIVE);
            updateClient(client);
        } else {
            throw new RuntimeException("Client not found with id: " + id);
        }
    }

    public void deactivateClient(Integer id) {
        Client client = getClientById(id);
        if (client != null) {
            client.setStatus(Client.ClientStatus.INACTIVE);
            updateClient(client);
        } else {
            throw new RuntimeException("Client not found with id: " + id);
        }
    }

    public void suspendClient(Integer id) {
        Client client = getClientById(id);
        if (client != null) {
            client.setStatus(Client.ClientStatus.SUSPENDED);
            updateClient(client);
        } else {
            throw new RuntimeException("Client not found with id: " + id);
        }
    }

    public void deleteClient(Integer id) {
        clientRepository.deleteById(id);
    }

    public boolean authenticateClient(String email, String password) {
        Client client = clientRepository.findByEmail(email);
        return client != null && client.getPassword().equals(password);
    }
}