<%@ include file="./header.jsp"%>

<div id="banner">
  <div class="wrap">
    <ul>
      <li><img src="./img/banner/banner-01.jpg" width="930" height="230" alt="" title="" /></li>
      <li><img src="./img/banner/banner-02.jpg" width="930" height="230" alt="" title="" /></li>
      <li><img src="./img/banner/banner-03.jpg" width="930" height="230" alt="" title="" /></li>
    </ul>
    <!-- 930x230 -->
  </div>
</div>

<c:choose>
    <c:when test="${not empty param.t}">
        <jsp:include page="./${param.t}.jsp" />  
    </c:when>
        
    <c:otherwise>
        <ul id="serv-home" class="box-home">
            <li>
              <div class="title"><a href="./?t=localizacao>">Localização</a></div>
              <div class="description"><a href="./?t=localizacao"><img src="./img/icon-mapa.png" alt="" /></a></div>
            </li>

            <li>
              <div class="title">Cadastro</div>
              <div class="description"><a href="./?t=cadastro"><img src="./img/icon-cadastro.png" alt="" /></a></div>
            </li>

            <li>
              <div class="title">Sobre nós</div>
              <div class="description"><a href="./?t=sobre-nos"><img src="./img/icon-sobre.png" alt="" /></a></div>
            </li>
            <div class="clearfix"></div>
        </ul>
    </c:otherwise>
</c:choose>


<%@ include file="./footer.jsp"%>