package com.marksem.repo;

import com.marksem.entity.booking.BookingMaintenance;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingMaintenanceRepository extends JpaRepository<BookingMaintenance, Long> {
}
