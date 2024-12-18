package com.flowfit.sbfitflow.model;


public class AuthResponseClient {
    private boolean authenticated;

    public AuthResponseClient(boolean isAuthenticated) {
        this.authenticated = isAuthenticated;
    }

    public boolean isAuthenticated() {
        return authenticated;
    }

    public void setAuthenticated(boolean authenticated) {
        this.authenticated = authenticated;
    }
}