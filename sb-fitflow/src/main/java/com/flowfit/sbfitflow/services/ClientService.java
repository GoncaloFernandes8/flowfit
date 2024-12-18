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

    public void createClient(Client client) {
        clientRepository.save(client);
    }

    public Client updateClient(Client client) {
        return clientRepository.save(client);
    }

    public boolean authenticateClient(String email, String password) {
        Client client = clientRepository.findByEmail(email);
        return client != null && client.getPassword().equals(password);
    }
}