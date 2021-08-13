package edu.miu.waa.maskmstore.dto;

import edu.miu.waa.maskmstore.domain.LineItem;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;
@Getter
@Setter
public class OrderDTO {
    private Date createdOn;
    private double price;
    List<LineItemDTO> lineItemsDTO;

}
