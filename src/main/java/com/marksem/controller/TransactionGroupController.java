package com.marksem.controller;

import com.marksem.dto.request.RequestTransactionGroup;
import com.marksem.dto.response.PageableResponse;
import com.marksem.dto.response.ResponseTransactionGroup;
import com.marksem.service.TransactionGroupService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/transactionGroups")
@RequiredArgsConstructor
public class TransactionGroupController {
    private final TransactionGroupService service;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody List<RequestTransactionGroup> tg) {
        return ResponseEntity.ok(service.create(tg));
    }

//    @PostMapping
//    @PreAuthorize("hasAuthority('developers:write')")
//    public ResponseEntity<ResponseTransactionGroup> create(@RequestBody RequestTransactionGroup tg) {
//        return ResponseEntity.ok(service.create(tg));
//    }
//
//    @PutMapping
//    @PreAuthorize("hasAuthority('developers:write')")
//    public ResponseEntity<ResponseTransactionGroup> update(@RequestBody RequestTransactionGroup tg) {
//        return ResponseEntity.ok(service.update(tg));
//    }
//
//    @DeleteMapping("{id}")
//    @PreAuthorize("hasAuthority('developers:write')")
//    public ResponseEntity<Long> delete(@PathVariable("id") Long id) {
//        return ResponseEntity.ok(service.delete(id));
//    }

}
