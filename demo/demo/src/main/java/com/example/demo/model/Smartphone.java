package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "smartphone")
public class Smartphone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "brand")
    private String brand;
    @Column(name = "model")
    private String model;
    @Column(name = "specs")
    private String specs;
    @Column(name = "price")
    private int price;
    @Column(name = "isAvailable")
    private boolean isAvailable;
    @Column(name = "imgPath")
    private String imgPath;

    public Smartphone(Long id, String brand, String model, String specs, int price, boolean isAvailable, String imgPath) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.specs = specs;
        this.price = price;
        this.isAvailable = isAvailable;
        this.imgPath = imgPath;
    }

    public Smartphone(String brand, String model, String specs, int price, boolean isAvailable, String imgPath) {
        this.brand = brand;
        this.model = model;
        this.specs = specs;
        this.price = price;
        this.isAvailable = isAvailable;
        this.imgPath = imgPath;
    }

    public Smartphone() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getSpecs() {
        return specs;
    }

    public void setSpecs(String specs) {
        this.specs = specs;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void setAvailable(boolean available) {
        isAvailable = available;
    }

    public String getImgPath() {
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }

    @Override
    public String toString() {
        return "Smartphone{" +
                "id=" + id +
                ", brand='" + brand + '\'' +
                ", model='" + model + '\'' +
                ", specs='" + specs + '\'' +
                ", price=" + price +
                ", isAvailable=" + isAvailable +
                ", imgPath='" + imgPath + '\'' +
                '}';
    }
}
