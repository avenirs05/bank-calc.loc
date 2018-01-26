<!doctype html>
<html>
  <head>
    <title>Калькулятор банковская гарантия</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">	
    
    <!-- Bootstrap -->
    <link href="https://banksp.ru/wp-content/themes/prf/css/bootstrap.min.css" rel="stylesheet">
 		<link href="https://banksp.ru/wp-content/themes/prf/css/bootstrap-select.min.css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="https://banksp.ru/wp-content/themes/prf/css/owl.carousel.css">
    <link href="https://banksp.ru/wp-content/themes/prf/style.css" rel="stylesheet">
    <link href="https://banksp.ru/wp-content/themes/prf/responsive.css" rel="stylesheet">


  </head>

  <body> 
	<form action="" method="post">
		
	<section class="calk calkbg text-center" id="rasschet">
	   <div class="container">
	      <div class="row">
	         <div class="col-md-12">
	            <h2>Рассчитайте стоимость банковской гарантии</h2>
	            <form>
	               <ul class="calk-list">
	                  <li>
	                     <div class="form-group">
	                        <label for="summag">Сумма гарантии</label>
	                        <input type="text" class="form-control" min="1" max="15000000" onchange="isright(this);" placeholder="1 000 000" id="summag">
	                        <span>руб.</span>
	                     </div>
	                     <div class="form-group">
	                        <label for="srokg">Срок гарантии</label>
	                        <input type="text" class="form-control" min="1" max="1096" onchange="isright(this);" placeholder="365" id="srokg">
	                        <span>дней</span>
	                     </div>
	                  </li>
	                  <li>
	                     <div class="form-group-select">
	                        <div class="btn-group bootstrap-select">
	                           <button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" role="button" title="Исполнение контракта"><span class="filter-option pull-left">Исполнение контракта</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button>
	                           <div class="dropdown-menu open" role="combobox">
	                              <ul class="dropdown-menu inner" role="listbox" aria-expanded="false">
	                                 <li data-original-index="0" class="selected"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span class="text">Исполнение контракта</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>
	                                 <li data-original-index="1"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Обеспечение заявки</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>
	                              </ul>
	                           </div>
	                           <select class="selectpicker" tabindex="-98">
	                              <option selected="" value="sele1">Исполнение контракта</option>
	                              <option value="sele2">Обеспечение заявки</option>
	                           </select>
	                        </div>
	                     </div>
	                  </li>
	                  <li>
	                     <div class="form-group-radio">
	                        <label class="radio-inline">
	                        <input type="radio" checked="checked" name="optradio" value="2" class="input-hidden" id="radio1">
	                        <span></span>
	                        44-ФЗ
	                        </label>
	                        <label class="radio-inline"><input type="radio" name="optradio" value="3" class="input-hidden" id="radio2">
	                        <span></span>
	                        223-ФЗ
	                        </label>
	                     </div>
	                     <div class="form-group">
	                        <button type="submit" class="btn btn-default btn-default-calk">Рассчитать</button>
	                     </div>
	                  </li>
	                  <li class="li-hr">
	                     <hr>
	                  </li>
	               </ul>
	               <ul class="calk-list">
	                  <li>
	                     <div class="form-group">
	                        <label for="summag">Сумма гарантии</label>
	                        <input type="text" class="form-control" min="1" max="15000000" onchange="isright(this);" placeholder="1 000 000" id="summag">
	                        <span>руб.</span>
	                     </div>
	                     <div class="form-group">
	                        <label for="srokg">Срок гарантии</label>
	                        <input type="text" class="form-control" min="1" max="1096" onchange="isright(this);" placeholder="365" id="srokg">
	                        <span>дней</span>
	                     </div>
	                  </li>
	                  <li>
	                     <div class="form-group-select">
	                        <div class="btn-group bootstrap-select">
	                           <button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" role="button" title="Обеспечение заявки"><span class="filter-option pull-left">Обеспечение заявки</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button>
	                           <div class="dropdown-menu open" role="combobox">
	                              <ul class="dropdown-menu inner" role="listbox" aria-expanded="false">
	                                 <li data-original-index="0"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Исполнение контракта</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>
	                                 <li data-original-index="1" class="selected"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span class="text">Обеспечение заявки</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>
	                              </ul>
	                           </div>
	                           <select class="selectpicker" tabindex="-98">
	                              <option value="sele1">Исполнение контракта</option>
	                              <option selected="" value="sele2">Обеспечение заявки</option>
	                           </select>
	                        </div>
	                     </div>
	                  </li>
	                  <li>
	                     <div class="form-group-radio">
	                        <label class="radio-inline">
	                        <input type="radio" checked="checked" name="optradio" value="2" class="input-hidden" id="radio1">
	                        <span></span>
	                        44-ФЗ
	                        </label>
	                        <label class="radio-inline"><input type="radio" name="optradio" value="3" class="input-hidden" id="radio2">
	                        <span></span>
	                        223-ФЗ
	                        </label>
	                     </div>
	                     <div class="form-group">
	                        <button type="submit" class="btn btn-default btn-default-calk">Рассчитать</button>
	                     </div>
	                  </li>
	                  <li class="li-hr">
	                     <hr>
	                  </li>
	               </ul>
	               <ul class="calk-list-rezult">
	                  <li><span class="text">Стоимость банковской гарантии
	                     для Вас составит: </span>
	                  </li>
	                  <li><span class="summ">0 руб.</span></li>
	                  <li>
	                     <!--<a href="#form-top" class="zayavka-btn">Отправить заявку</a>-->
	                     <a href="#contact_form_pop_2" class="zayavka-btn fancybox">Отправить заявку</a>
	                  </li>
	                  <li>
	                     <a name="clear"></a>
	                     <a href="#clear" title="Очистить все" class="zayavka-btn" onclick="window.location.reload();">Обнулить значение</a>	
	                  </li>
	               </ul>
	            </form>
	         </div>
	      </div>
	   </div>
	</section>

	</form>




	



	<script src="main.js"></script>
	<script src="script.js"></script>
	</body>
	
	</html>

