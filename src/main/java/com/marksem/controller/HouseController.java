package com.marksem.controller;

import com.marksem.dto.request.RequestHouse;
import com.marksem.dto.response.ResponseHouse;
import com.marksem.service.HouseService;
import com.marksem.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("api/v1/houses")
@RequiredArgsConstructor
public class HouseController {
    private final HouseService service;
    private final UserService userService;

    @GetMapping
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<List<ResponseHouse>> readAll(Principal principal) {
        return ResponseEntity.ok(service.readAll(userService.getUserByEmail(principal.getName())));
    }

    @GetMapping("{id}")
    @PreAuthorize("hasAuthority('developers:read')")
    public ResponseEntity<ResponseHouse> read(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.read(id));
    }

    @PostMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<ResponseHouse> create(@ModelAttribute @Valid RequestHouse h, @RequestHeader("Authorization") String token) {
        return ResponseEntity.ok(service.create(h, token));
    }

    @PutMapping
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<ResponseHouse> update(@RequestBody RequestHouse h) {
        return ResponseEntity.ok(service.update(h));
    }

    @DeleteMapping("{id}")
    @PreAuthorize("hasAuthority('developers:write')")
    public ResponseEntity<Long> delete(@PathVariable("id") Long id) {
        return ResponseEntity.ok(service.delete(id));
    }
}
