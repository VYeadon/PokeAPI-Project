package com.QA.pokemonapp.interoperability.rest.item;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.QA.pokemonapp.business.service.item.ShopService;
import com.QA.pokemonapp.persistance.domain.Player;
import com.QA.pokemonapp.persistance.domain.Shop;

@RestController
@RequestMapping("/api/shop")
public class ShopRestcontroller {
	
	@Autowired
	private ShopService shopService;
	
	@Autowired
	Player player;
	
	@GetMapping("/generate")
	public Shop createShop() {
		return
			shopService.createShop();
	}
	
	@PostMapping("/buy-item/{itemIndex}")
	public void buyItem(@PathVariable int itemIndex) {
		shopService.buyItem(itemIndex, player);
	}

	@GetMapping("sell-item/{itemType}/{itemName}")
	public void sellItem(@PathVariable String itemType, @PathVariable String itemIndex) {
		shopService.sellItem(itemType, itemIndex, player);
	}
}