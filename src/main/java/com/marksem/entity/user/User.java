package com.marksem.entity.user;

import com.marksem.entity.BaseEntity;
import com.marksem.entity.contact.Contact;
import com.marksem.entity.house.House;
import com.marksem.entity.notification.Notification;
import com.marksem.entity.task.Task;
import com.marksem.entity.transaction.Currency;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@EqualsAndHashCode(exclude = "contacts", callSuper = true)
@Entity
@Table(name = "users")
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User extends BaseEntity {
    private String password;

    @Column(unique = true)
    private String email;

    @Column(name = "manager_id")
    private Long managerId;

    private String name;
    private Date birthday;

    @Column(name = "url_avatar")
    private String urlAvatar;

    @Enumerated(EnumType.STRING)
    private Language language;

    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToMany(mappedBy = "owner", fetch = FetchType.LAZY)
    private List<House> houses = new ArrayList<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<Contact> contacts = new ArrayList<>();

    @OneToMany(mappedBy = "receiver", fetch = FetchType.LAZY)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<Notification> notifications = new ArrayList<>();

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    private List<Task> tasks = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    private Currency currency;
}
