$(document).ready(function() {
	var productIds = [
		'PRO-13603',
		'PRO-13604',
		'PRO-13606',
		'PRO-216616',
		'PRO-13610',
		'PRO-13614',
		'PRO-13626',
		'PRO-13636',
		'PRO-15056',
		'PRO-17694',
		'PRO-18806',
		'PRO-19376',
		'PRO-19594',
		'PRO-19786',
		'PRO-19787',
		'PRO-20137',
		'PRO-20139',
		'PRO-20276',
		'PRO-21278',
		'PRO-21504',
		'PRO-21897',
		'PRO-227496',
		'PRO-151761',
		'PRO-112870',
		'PRO-127456',
		'PRO-151753',
		'PRO-268888',
		'PRO-268896',
		'PRO-268912',
		'PRO-268946',
		'PRO-307553',
		'PRO-328500',
		'PRO-328518',
		'PRO-328526',
		'PRO-328534',
		'PRO-520288',
		'PRO-380923',
		'PRO-381178',
		'PRO-381905',
		'PRO-406538',
		'PRO-443341',
		'PRO-446260',
		'PRO-446278',
		'PRO-447409',
		'PRO-453381',
		'PRO-462606',
		'PRO-496380',
		'PRO-517425',
		'PRO-518191',
		'PRO-524736',
		'PRO-527069',
		'PRO-527226',
		'PRO-527234',
		'PRO-527242',
		'PRO-527259',
		'PRO-534149',
		'PRO-543041',
		'PRO-604728',
		'PRO-564757',
		'PRO-564765',
		'PRO-567354',
		'PRO-567362',
		'PRO-567370',
		'PRO-567388',
		'PRO-567446',
		'PRO-567479',
		'PRO-567503',
		'PRO-567511',
		'PRO-567537',
		'PRO-567545',
		'PRO-568568',
		'PRO-568766',
		'PRO-583377',
		'PRO-583385',
		'PRO-583427',
		'PRO-583435',
		'PRO-583450',
		'PRO-591578',
		'PRO-592873',
		'PRO-592881',
		'PRO-592899',
		'PRO-592907',
		'PRO-592915',
		'PRO-592923',
		'PRO-16602',
		'PRO-595405',
		'PRO-595462',
		'PRO-595496',
		'PRO-597070',
		'PRO-597179',
		'PRO-235813',
		'PRO-136107',
		'PRO-637579',
		'PRO-638049',
		'PRO-136109',
		'PRO-663054',
		'PRO-673855',
		'PRO-673863',
		'PRO-673871',
		'PRO-673889',
		'PRO-673897',
		'PRO-673905',
		'PRO-683367',
		'PRO-683425',
		'PRO-683466',
		'PRO-685289',
		'PRO-686980',
		'PRO-687004',
		'PRO-688374',
		'PRO-693317',
		'PRO-693333',
		'PRO-693341',
		'PRO-695890',
		'PRO-705863',
		'PRO-695916',
		'PRO-695940',
		'PRO-695965',
		'PRO-700732',
		'PRO-16209',
		'PRO-180373',
		'PRO-180374',
		'PRO-180375',
		'PRO-180376',
		'PRO-180384',
		'PRO-180385',
		'PRO-180386',
		'PRO-184886',
		'PRO-184887',
		'PRO-806653',
		'PRO-184889',
		'PRO-184891',
		'PRO-184892',
		'PRO-184893',
		'PRO-191993',
		'PRO-191994',
		'PRO-895128',
		'PRO-903930',
		'PRO-903948',
		'PRO-907592',
		'PRO-907600',
		'PRO-918227',
		'PRO-918235',
		'PRO-918243',
		'PRO-918250',
		'PRO-918268',
		'PRO-918284',
		'PRO-918292',
		'PRO-918631',
		'PRO-918664',
		'PRO-918672',
		'PRO-923144',
		'PRO-923151',
		'PRO-923193',
		'PRO-923268',
		'PRO-932509',
		'PRO-1006931',
		'PRO-1006980',
		'PRO-1006998',
		'PRO-1007491',
		'PRO-1021567',
		'PRO-1021773',
		'PRO-1021781',
		'PRO-1021799',
		'PRO-1022110',
		'PRO-1022128',
		'PRO-1022136',
		'PRO-1022144',
		'PRO-1022151',
		'PRO-1022169',
		'PRO-1022177',
		'PRO-1022185',
		'PRO-1022193',
		'PRO-1022201',
		'PRO-1022227',
		'PRO-1022235',
		'PRO-1022243',
		'PRO-1022250',
		'PRO-1022268',
		'PRO-1036201',
		'PRO-1038504',
		'PRO-1038512',
		'PRO-1039148',
		'PRO-1039155',
		'PRO-1039163',
		'PRO-1039171',
		'PRO-1039189',
		'PRO-1039197',
		'PRO-1039205',
		'PRO-1039221',
		'PRO-1039239',
		'PRO-1039247',
		'PRO-1040237',
		'PRO-1055631',
		'PRO-1074103',
		'PRO-1074137',
		'PRO-1104504',
		'PRO-1121912',
		'PRO-1121920',
		'PRO-1121938',
		'PRO-1149921',
		'PRO-1157817',
		'PRO-1204262',
		'PRO-1204270',
		'PRO-1204304',
		'PRO-1204312',
		'PRO-1204338',
		'PRO-1204353',
		'PRO-1204361',
		'PRO-1204379',
		'PRO-1207109',
		'PRO-1207117',
		'PRO-1207125',
		'PRO-1207133',
		'PRO-1215193',
		'PRO-1219450',
		'PRO-1233253',
		'PRO-1233311',
		'PRO-1236785',
		'PRO-1236876',
		'PRO-1251164',
		'PRO-1251172',
		'PRO-1251180',
		'PRO-1251255',
		'PRO-1251263',
		'PRO-1251271',
		'PRO-1251297',
		'PRO-1256247',
		'PRO-1262286',
		'PRO-1279181',
		'PRO-1291889',
		'PRO-1351758',
		'PRO-1356393',
		'PRO-1356427',
		'PRO-1356476',
		'PRO-1356526',
		'PRO-1372465',
		'PRO-1372481',
		'PRO-1372499',
		'PRO-1378538',
		'PRO-1378546',
		'PRO-1378553',
		'PRO-1379528',
		'PRO-1379536',
		'PRO-1388552',
		'PRO-1396316',
		'PRO-1396324',
		'PRO-1396332',
		'PRO-1396340',
		'PRO-1396357',
		'PRO-1396381',
		'PRO-1398163',
		'PRO-1489970',
		'PRO-1497734',
		'PRO-1503531',
		'PRO-1527720',
		'PRO-1534262',
		'PRO-1551548',
		'PRO-1551555',
		'PRO-1551563',
		'PRO-1551597',
		'PRO-1551605',
		'PRO-1551613',
		'PRO-1568328',
		'PRO-1669027',
		'PRO-1669035',
		'PRO-1669043',
		'PRO-1691641',
		'PRO-1706431',
		'PRO-1749308',
		'PRO-1761170',
		'PRO-1761196',
		'PRO-1761204',
		'PRO-1761212',
		'PRO-1761220',
		'PRO-1761261',
		'PRO-1773381',
		'PRO-1790294',
		'PRO-275270',
		'PRO-1822006',
		'PRO-1822014',
		'PRO-1822022',
		'PRO-1822030',
		'PRO-1822048',
		'PRO-1822105',
		'PRO-1822212',
		'PRO-1822592',
		'PRO-1824275',
		'PRO-1852037',
		'PRO-1856434',
		'PRO-1856558',
		'PRO-1857135',
		'PRO-1857440',
		'PRO-1904374',
		'PRO-1904390',
		'PRO-1904408',
		'PRO-1904432',
		'PRO-1904440',
		'PRO-1904457',
		'PRO-1904465',
		'PRO-1909159',
		'PRO-1909183',
		'PRO-1909191',
		'PRO-1909209',
		'PRO-1909217',
		'PRO-1909225',
		'PRO-1909233',
		'PRO-1909258',
		'PRO-1909266',
		'PRO-1909738',
		'PRO-1921568',
		'PRO-3555844',
		'PRO-1921592',
		'PRO-1921600',
		'PRO-1921659',
		'PRO-1921667',
		'PRO-1921683',
		'PRO-1921691',
		'PRO-1951698',
		'PRO-1951979',
		'PRO-20138',
		'PRO-21935',
		'PRO-21936',
		'PRO-658161',
		'PRO-1963842',
		'PRO-1963859',
		'PRO-1963883',
		'PRO-1963909',
		'PRO-1993716',
		'PRO-2028132',
		'PRO-2040251',
		'PRO-2040269',
		'PRO-2040277',
		'PRO-2040335',
		'PRO-2046373',
		'PRO-2087823',
		'PRO-2088698',
		'PRO-2131274',
		'PRO-2138790',
		'PRO-2138808',
		'PRO-2138840',
		'PRO-2138857',
		'PRO-2138865',
		'PRO-2138873',
		'PRO-2138881',
		'PRO-2158178',
		'PRO-2158186',
		'PRO-2163749',
		'PRO-2192573',
		'PRO-2192755',
		'PRO-2192763',
		'PRO-2192771',
		'PRO-2192789',
		'PRO-2192797',
		'PRO-2193712',
		'PRO-2224285',
		'PRO-2224293',
		'PRO-2224301',
		'PRO-2224319',
		'PRO-2224327',
		'PRO-2224335',
		'PRO-2225001',
		'PRO-2231041',
		'PRO-2231058',
		'PRO-2293173',
		'PRO-2293199',
		'PRO-2293207',
		'PRO-2293223',
		'PRO-2293231',
		'PRO-2293249',
		'PRO-2293256',
		'PRO-2293264',
		'PRO-2293272',
		'PRO-2293280',
		'PRO-2341493',
		'PRO-2403251',
		'PRO-2403285',
		'PRO-2403350',
		'PRO-2403368',
		'PRO-2403376',
		'PRO-2403467',
		'PRO-2403475',
		'PRO-2421212',
		'PRO-2472827',
		'PRO-2563021',
		'PRO-2563039',
		'PRO-2563054',
		'PRO-2563062',
		'PRO-2563070',
		'PRO-2563088',
		'PRO-2563096',
		'PRO-2580819',
		'PRO-2654374',
		'PRO-2816411',
		'PRO-3016847',
		'PRO-3016862',
		'PRO-3016870',
		'PRO-3016888',
		'PRO-3016896',
		'PRO-3016904',
		'PRO-3016912',
		'PRO-3016920',
		'PRO-3016938',
		'PRO-3084720',
		'PRO-3084738',
		'PRO-3324951',
		'PRO-3324969',
		'PRO-3324977',
		'PRO-3324985',
		'PRO-3324993',
		'PRO-3325008',
		'PRO-3325016',
		'PRO-3325024',
		'PRO-3325065',
		'PRO-3325073',
		'PRO-3325081',
		'PRO-3434842',
		'PRO-3434859',
		'PRO-3436623',
		'PRO-3562386',
		'PRO-3436722',
		'PRO-3436730',
		'PRO-3488731',
		'PRO-3489341',
		'PRO-3489408',
		'PRO-3489499',
		'PRO-3489911',
		'PRO-3491669',
		'PRO-3493061',
		'PRO-3493137',
		'PRO-3493186',
		'PRO-3493319',
		'PRO-3493467',
		'PRO-18808',
		'PRO-3493525',
		'PRO-3493673',
		'PRO-1921618',
		'PRO-3493707',
		'PRO-3493723',
		'PRO-3493731',
		'PRO-3493749',
		'PRO-3493897',
		'PRO-3493954',
		'PRO-3493962',
		'PRO-3493988',
		'PRO-3493996',
		'PRO-3494457',
		'PRO-3494408',
		'PRO-3494416',
		'PRO-3494424',
		'PRO-3494432',
		'PRO-3494465',
		'PRO-3494515',
		'PRO-3494523',
		'PRO-3494531',
		'PRO-3494549',
		'PRO-3494556',
		'PRO-3494564',
		'PRO-3494572',
		'PRO-3494580',
		'PRO-3499373',
		'PRO-3499381',
		'PRO-3499399',
		'PRO-3501145',
		'PRO-1074491',
		'PRO-1074483',
		'PRO-2391332',
		'PRO-2391308',
		'PRO-3554136',
		'PRO-3554151',
		'PRO-2472819',
		'PRO-1074442',
		'PRO-3555729',
		'PRO-3555737',
		'PRO-3555810',
		'PRO-3555885',
		'PRO-3558608',
		'PRO-3562667',
		'PRO-3575206',
		'PRO-3575271',
		'PRO-3575289',
		'PRO-3575297',
		'PRO-3575305',
		'PRO-3575313',
		'PRO-3575321',
		'PRO-3575339',
		'PRO-3575347',
		'PRO-3575354',
		'PRO-3575362',
		'PRO-1074418',
		'PRO-1074517',
		'PRO-1074459',
		'PRO-3621448',
		'PRO-3621455',
		'PRO-3621463',
		'PRO-3621471',
		'PRO-3621497',
		'PRO-3621505',
		'PRO-3621521',
		'PRO-3621547',
		'PRO-3621554',
		'PRO-3621562',
		'PRO-3623584',
		'PRO-3660420',
		'PRO-3661279',
		'PRO-3661287',
		'PRO-3661295',
		'PRO-3661303',
		'PRO-3661311',
		'PRO-3661329',
		'PRO-3661337',
		'PRO-3661345',
		'PRO-3661352',
		'PRO-3661360',
		'PRO-3661378',
		'PRO-3661402',
		'PRO-3661410',
		'PRO-3661428',
		'PRO-3661436',
		'PRO-3661444',
		'PRO-3661451',
		'PRO-3661469',
		'PRO-3661477',
		'PRO-3661485',
		'PRO-3661493',
		'PRO-3661501',
		'PRO-3661519',
		'PRO-3661527',
		'PRO-3661535',
		'PRO-3661543',
		'PRO-3661550',
		'PRO-3661568',
		'PRO-3661576',
		'PRO-3661584',
		'PRO-3661592',
		'PRO-3661600',
		'PRO-3661618',
		'PRO-3661675',
		'PRO-3661691',
		'PRO-3661766',
		'PRO-3661956',
		'PRO-3662046',
		'PRO-3662400',
		'PRO-3662418',
		'PRO-3823820',
		'PRO-3830361',
		'PRO-3830379',
		'PRO-3830429',
		'PRO-3830619',
		'PRO-3830692',
		'PRO-3830718',
		'PRO-3830726',
		'PRO-3830734',
		'PRO-3830742',
		'PRO-3830759',
		'PRO-3841962',
		'PRO-3841970',
		'PRO-3842002',
		'PRO-3842044',
		'PRO-3842051',
		'PRO-3842069',
		'PRO-3842077',
		'PRO-3842127',
		'PRO-3842143',
		'PRO-3897550',
		'PRO-3897568',
		'PRO-3897584',
		'PRO-3897592',
		'PRO-3897600',
		'PRO-3897618',
		'PRO-3897626',
		'PRO-3897634',
		'PRO-3897642',
		'PRO-3897659',
		'PRO-3897667',
		'PRO-3897675',
		'PRO-3897683',
		'PRO-3897691',
		'PRO-3897709',
		'PRO-3897717',
		'PRO-3897725',
		'PRO-3899127',
		'PRO-3899135',
		'PRO-3899143',
		'PRO-3902814',
		'PRO-3902822',
		'PRO-3982113',
		'PRO-3987872'
	];

	$('.item.ec_listing .quickviewlink input[value]').each(function(ignore, item) {
		if (productIds.indexOf(item.value) !== -1) {
			$(item)
				.closest('dt')
				.siblings('.productinfo')
				.find('.priceblock')
				.after(
					'<div data-component="StoreProvider">\
						<div data-component="ComparisonCheckbox" data-prop-product="' +
						item.value +
						'">\
						</div>\
					</div>'
				);
		}
	});

	$('body').append(
		'<div data-component="StoreProvider">\
			<div data-component="ComparisonBar" data-n-prop-number-of-items="3"></div>\
		</div>'
	);

	$(
		'\
		<style>\
			.comparison-table button[disabled] {\
				background-color: rgba(0, 0, 0, 0.2) !important;\
			}\
		</style>\
		'
	).appendTo('body');

	$('.pagination').hide();

	if (ComponentManifest) {
		ComponentManifest.bootstrapper.update();

		var localProductData = JSON.parse(localStorage.getItem('comparisonChartLocalData')) || {};

		$(document).on('click', '.comparison-checkbox', function(event) {
			var self = event.target;
			var $self = $(self);
			var productId = $self.closest('[data-product]').data('product');

			if (self.checked) {
				localProductData[productId] = {};
				localProductData[productId].markup = $self
					.closest('[data-habitat]')
					.siblings('.priceblock')
					.html();
				localProductData[productId].image = $self
					.closest('.productinfo')
					.siblings('dt')
					.find('img')
					.attr('src');
				localStorage.setItem('comparisonChartLocalData', JSON.stringify(localProductData));
			} else {
				delete localProductData[productId];
			}
			if (localProductData[productId]) {
				$('.comparison-bar img').each(function(ignore, item) {
					if (new RegExp(productId).test(item.src)) {
						$(item).attr('src', localProductData[productId].image);
					}
				});

				window.setTimeout(function() {
					$('.comparison-bar img').each(function(ignore, item) {
						if (new RegExp(productId).test(item.src)) {
							$(item).attr('src', localProductData[productId].image);
						}
					});

					$('.comparison-checkbox input[type=checkbox]')
						.siblings('svg')
						.css('color', 'unset');
					$('.comparison-checkbox input[type=checkbox][disabled]')
						.siblings('svg')
						.css('color', 'rgba(0, 0, 0, 0.26)');
					window.setTimeout(function() {
						$('.comparison-bar img').each(function(ignore, item) {
							if (new RegExp(productId).test(item.src)) {
								$(item).attr('src', localProductData[productId].image);
							}
						});
						window.setTimeout(function() {
							$('.comparison-bar img').each(function(ignore, item) {
								if (new RegExp(productId).test(item.src)) {
									$(item).attr('src', localProductData[productId].image);
								}
							});

							$('.comparison-checkbox input[type=checkbox]')
								.siblings('svg')
								.css('color', 'unset');
							$('.comparison-checkbox input[type=checkbox][disabled]')
								.siblings('svg')
								.css('color', 'rgba(0, 0, 0, 0.26)');
						}, 200);
					}, 100);
				}, 0);
			}
		});
		$(document).on('click', '.comparison-table > button', function(event) {
			window.setTimeout(function() {
				$('table[class*=jss] > thead > tr:eq(0) > th').each(function(index, header) {
					if (index > 0) {
						var adjustedIndex = index - 1;
						var productId = $(header)
							.find('[data-product-id]')
							.data('product-id');

						$('.comparison-bar img').each(function(ignore, item) {
							if (new RegExp(productId).test(item.src)) {
								$(item).attr('src', localProductData[productId].image);
							}
						});

						$(header)
							.find('img')
							.attr('src', localProductData[productId].image);
						$(header).wrapInner(
							'<div style="clear: both; float: left; margin-right: 20px; max-width: 40%;"></div>'
						);
						if (localProductData[productId]) {
							$(header).append(
								'<div style="float: left; margin-top: 10px; max-width: 40%;">' +
									localProductData[productId].markup +
									'\
									<a \
										class="product-addToCart comparison-chart-add-to-cart"\
										data-product-id="' +
									productId +
									'"\
										onMouseOver="this.style.textDecoration = \'underline\';"\
										onMouseOut="this.style.textDecoration = \'none\';"\
										style="\
										background-color: rgb(109, 139, 25);\
										border: none;\
										border-radius: 5px;\
										box-sizing: border-box;\
										color: rgb(255, 255, 255);\
										cursor: pointer;\
										display: block;\
										float: left;\
										font-family: mreavessansbold, Verdana, Arial, Helvetica, sans-serif;\
										font-size: 12px;\
										height: 26px;\
										line-height: 26px;\
										margin-bottom: 5px;\
										margin-right: 10px;\
										outline-color: transparent;\
										outline-style: none;\
										outline-width: 0px;\
										text-align: center;\
										text-decoration-color: rgb(255, 255, 255);\
										text-decoration-style: solid;\
										text-size-adjust: 100%;\
										text-transform: uppercase;\
										width: 100px;\
										-webkit-tap-highlight-color: transparent;\
									">\
									ADD TO CART\
									</a>\
									' +
									'</div>'
							);
						}
					}
				});
			}, 0);

			// Add to cart action:

			// Use event delegation to catch any 'ADD TO CART' click.
			$(document).on('click', '.comparison-chart-add-to-cart', function(event) {
				var productId = event.target.dataset.productId;
				// Establish our 'bonus' item (gift with purchase):
				var giftWithPurchaseItem = {
					sku: productId.slice(4),
					productId: productId,
					quantity: 1
				};

				// Set a sku on the main product that is eligible
				// for the bonus (GWP) item. If there isn't
				// a sku you are targeting, set this variable
				// to 'false'.
				var eligibleForGiftWithPurchaseSku = false;

				// Data layer event object:
				var ddPersistedListAddEvent = {
					eventInfo: {
						eventName: 'persistedListAddition',
						type: 'persisted list',
						location: 'cart',
						registryID: '',
						target: 'cart',
						timeStamp: new Date(),
						processed: {
							adobeAnalytics: false
						}
					},
					product: [
						{
							productInfo: {
								productID: giftWithPurchaseItem.productId,
								sku: giftWithPurchaseItem.sku
							},
							category: {
								productType: '',
								size: '',
								color: ''
							},
							quantity: giftWithPurchaseItem.quantity
						}
					]
				};

				// Check if the sku matches our eligible item, or
				// check if the eligible item variable is false.
				if (
					!eligibleForGiftWithPurchaseSku ||
					$('.product-sku')
						.text()
						.trim() === eligibleForGiftWithPurchaseSku
				) {
					// Fill add to cart form:
					var $form = $('#addItemToCartForm');
					$form.find('.commerceItemTypeToSubmit').val('storeCommerceItem');
					$form.find('.productToSubmit').val(giftWithPurchaseItem.productId);
					$form.find('.skuToSubmit').val(giftWithPurchaseItem.sku);
					$form.find('.qtyToSubmit').val(giftWithPurchaseItem.quantity);
					$form.find('.addCulinaryToOrder').attr('disabled', 'true');

					// Submit the cart form so that our bonus item is added to cart.
					$form.ajaxSubmit().done(function() {
						// Push it onto the event array on the digitalData object.
						window.digitalData = window.digitalData || {};
						window.digitalData.event = window.digitalData.event || [];
						window.digitalData.event.push(ddPersistedListAddEvent);

						// Create and dispatch an event trigger (using predefined sendCustomEvent function).
						sendCustomEvent('persistedListAddition');
						// Redirect to shopping cart:
						window.location.pathname = '/cart/shoppingCart.jsp';
					});
				}
			});
		});
	}
});
