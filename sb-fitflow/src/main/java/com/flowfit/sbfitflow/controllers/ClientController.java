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




}