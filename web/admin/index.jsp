<%@ include file="./header.jsp"%>

<c:choose>
    <c:when test="${not empty param.t}">
        <jsp:include page="./${param.t}.jsp" />  
    </c:when>
        
    <c:otherwise>
        <table>
            <thead>
              <tr>
                <td></td>
                <td>Nome</td>
                <td>Quantidade</td>
                <td>Pre�o Unit�rio</td>
                <td>Total</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr data-id="1">
                <td><figure>  </figure></td>
                <td>Bolo de Maracuj�</td>
                <td>7</td>
                <td data-valor-unidade="1">R$ 1,00</td>
                <td data-valor-total="7">R$ 7,00</td>
                <td>
                  <a class="table-remover" data-id="1" href="#remover-carrinho" title="Remover">remover</a><br>
                </td>
              </tr>

              <tr data-id="2">
                <td><figure>  </figure></td>
                <td>Bolo de Maracuj�</td>
                <td>5</td>
                <td data-valor-unidade="1">R$ 1,00</td>
                <td data-valor-total="5">R$ 5,00</td>
                <td>
                  <a class="table-remover" data-id="2" href="#remover-carrinho" title="Remover">remover</a><br>
                </td>
              </tr>
            </tbody>
        </table>
    </c:otherwise>
</c:choose>

<%@ include file="./footer.jsp"%>