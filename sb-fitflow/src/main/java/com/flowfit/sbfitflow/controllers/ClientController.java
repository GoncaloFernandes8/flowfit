package com.flowfit.sbfitflow.controllers;

import com.flowfit.sbfitflow.model.AuthRequestClient;
import com.flowfit.sbfitflow.model.AuthResponseClient;
import com.flowfit.sbfitflow.model.Client;
import com.flowfit.sbfitflow.services.ClientService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/clients")
public class ClientController {



    private final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping
    public ResponseEntity<List<Client>> getAllClients() {
        List<Client> clients = clientService.findAllClients();
        return new ResponseEntity<>(clients, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable Integer id, @RequestBody Client updatedClient) {
        Client existingClient = clientService.getClientById(id);
        if (existingClient == null) {
            return ResponseEntity.notFound().build();
        }

        // Atualiza os campos do cliente existente com os dados do updatedClient
        existingClient.setEmail(updatedClient.getEmail());
        existingClient.setFirstName(updatedClient.getFirstName());
        existingClient.setLastName(updatedClient.getLastName());
        existingClient.setPhoneNumber(updatedClient.getPhoneNumber());
        // Não atualizamos a senha aqui, isso deve ser feito em um endpoint separado por questões de segurança

        // Atualiza o cliente no banco de dados
        Client updatedClientResult = clientService.updateClient(existingClient);
        return ResponseEntity.ok(updatedClientResult);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable Integer id) {
        Client client = clientService.getClientById(id);
        return client != null ? ResponseEntity.ok(client) : ResponseEntity.notFound().build();
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponseClient> authenticateClient(@RequestBody AuthRequestClient authRequestClient) {
        boolean isAuthenticated = clientService.authenticateClient(authRequestClient.getEmail(), authRequestClient.getPassword());
        return ResponseEntity.ok(new AuthResponseClient(isAuthenticated));
    }
    @PostMapping("/register")
    public ResponseEntity<Client> createClient(@RequestBody Client client) {
        // O id será gerado automaticamente
        // O active será false por padrão
        return ResponseEntity.ok(clientService.createClient(client));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClient(@PathVariable Integer id) {
        clientService.deleteClient(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}/activate")
    public ResponseEntity<Void> activateClient(@PathVariable Integer id) {
        try {
            clientService.activateClient(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/{id}/deactivate")
    public ResponseEntity<Void> deactivateClient(@PathVariable Integer id) {
        try {
            clientService.deactivateClient(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/{id}/suspend")
    public ResponseEntity<Void> suspendClient(@PathVariable Integer id) {
        try {
            clientService.suspendClient(id);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}