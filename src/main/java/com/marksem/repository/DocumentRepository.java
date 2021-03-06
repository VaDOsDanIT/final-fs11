package com.marksem.repository;

import com.marksem.entity.document.Document;
import com.marksem.entity.document.DocumentType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface DocumentRepository extends JpaRepository<Document, Long> {
    @Query(
            value = "SELECT Count(*) FROM documents WHERE house_id IN (SELECT id FROM houses WHERE owner_id IN (SELECT id FROM users WHERE manager_id = :id)) AND type = 'CONTRACT'",
            nativeQuery = true)
    Long getContractsQuantity(@Param("id") Long id);

    Page<Document> findByNameContainingIgnoreCaseAndType(String name, DocumentType type, Pageable pageable);
}
