# Extensão de Exemplo Web para Azure DevOps

[![Build Status](https://dev.azure.com/ms/azure-devops-extension-sample/_apis/build/status/Microsoft.azure-devops-extension-sample)](https://dev.azure.com/ms/azure-devops-extension-sample/_build/latest?definitionId=14)

Este repositório gera uma [extensão do Azure DevOps](https://docs.microsoft.com/en-us/azure/devops/extend/overview?view=vsts) contendo diversas contribuições de vários tipos.

## Dependências

O repositório de exemplo depende de alguns pacotes do Azure DevOps:

- [azure-devops-extension-sdk](https://github.com/Microsoft/azure-devops-extension-sdk): Módulo obrigatório para extensões do Azure DevOps que permite a comunicação entre a página hospedeira e o iframe da extensão.
- [azure-devops-extension-api](https://github.com/Microsoft/azure-devops-extension-api): Contém bibliotecas de cliente REST para as várias áreas de funcionalidade do Azure DevOps.
- [azure-devops-ui](https://developer.microsoft.com/azure-devops): Biblioteca de UI que contém os componentes React usados na interface web do Azure DevOps.

Algumas dependências externas:

- `React` - Usado para renderizar a UI nos exemplos e é uma dependência de `azure-devops-ui`.
- `TypeScript` - Os exemplos são escritos em TypeScript e compilados para JavaScript.
- `SASS` - Os exemplos de extensão são estilizados usando SASS (que é compilado para CSS e entregue em bundles JavaScript do webpack).
- `webpack` - Usado para reunir dependências em um único bundle JavaScript para cada exemplo.

## Fazendo build do projeto de exemplo

Basta executar:

    npm run build

Isso produz um arquivo .vsix que pode ser enviado para o [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops)

## Usando a extensão

A forma preferida de começar é usar o comando `tfx extension init`, que irá clonar a partir deste exemplo e solicitar as informações de substituição (como o seu ID de publicador). Basta executar:

    npm install -g tfx-cli
    tfx extension init

Você também pode clonar o projeto de exemplo e alterar a propriedade `publisher` em `azure-devops-extension.json` para o seu próprio ID de publicador no Marketplace. Consulte a [documentação online](https://docs.microsoft.com/en-us/azure/devops/extend/publish/overview?view=vsts) para configurar seu próprio publicador e publicar uma extensão.

# Exemplos

As contribuições individuais de exemplo são pastas autocontidas em `./src/Samples`. Dentro de cada exemplo você encontrará:

1. `{SampleName}.json` - descreve os objetos de contribuição que estão sendo adicionados ao Azure DevOps
2. `{SampleName}.html` - página que é renderizada dentro de um iframe na(s) página(s) apropriada(s) do Azure DevOps. Pode ser uma UI visível (como um Hub) ou um iframe em segundo plano (como um handler de ação de Menu). Este arquivo inclui uma referência para `{SampleName}.js`, e para frames visíveis conterá um único elemento `<div>` com id `root`.
3. `{SampleName}.ts(x)` - Script raiz que é executado quando o frame é carregado. Uma entrada de webpack é adicionada para esse arquivo, o que irá gerar um único arquivo `js` com esse conteúdo e todas as suas dependências.
4. `{SampleName}.scss` - arquivo sass opcional contendo os estilos (CSS) para a UI
5. Arquivos ts/tsx adicionais - Para exemplos grandes demais para um único arquivo, o código será dividido de forma apropriada

## BreadcrumbService

Este exemplo adiciona um serviço de breadcrumb que inclui um item de breadcrumb global "Sample Breadcrumb Item" ao hub de exemplo. Visite o "Sample Hub" no grupo de hubs `Pipelines` para ver esse item.

## CodeEditorContribution

Este exemplo adiciona uma definição de linguagem e um schema JSON para o editor de código.

Para ver a definição de linguagem em ação, adicione um novo arquivo ao Git ou TFVC chamado "sample.mylog" e copie o conteúdo de log de exemplo do [playground do Monaco](https://microsoft.github.io/monaco-editor/playground.html#extending-language-services-custom-languages).

Para ver o schema JSON em ação, adicione um novo arquivo ao Git ou TFVC chamado "myconfig.json" e comece a editá-lo.

## Feature

Este exemplo mostra como se conectar ao painel de Preview Features (abaixo do menu de perfil do usuário). Ele adiciona um hub simples que só é exibido quando a feature "ABC" está ativada. A feature pode ser alternada por usuário ou por organização.

Ele também define uma segunda feature (ABC v2) que controla se a v1 ou a v2 do hub ABC é usada (quando a feature ABC está ligada). Quando habilitada, uma contribuição "property-provider" modifica o nome e a URL da contribuição de hub. Aqui adicionamos um parâmetro de query v2=true à nossa página de hub existente, mas você também poderia especificar uma página HTML completamente diferente aqui. Esta feature demonstra funcionalidades um pouco mais avançadas fornecidas por preview features. Ela pode ser alternada por usuário, por projeto ou por organização (o "null" hostScopeValue). Ela vem ligada por padrão (defaultState: true). E possui uma regra de override que faz com que a feature v2 fique DESLIGADA (e desabilitada no painel de preview features) sempre que a feature ABC estiver desligada.

## Hub

Este exemplo adiciona um hub chamado "Sample Hub" ao grupo de hubs `Pipelines`. Se você visitar uma página em nível de projeto, encontrará o Sample Hub em `Pipelines` no menu de navegação vertical à esquerda da página.

O hub usa um componente Pivot para desenhar 4 abas diferentes:

1. Uma aba `Overview` contém alguns detalhes simples sobre o usuário e o projeto atuais
2. Uma aba `Navigation` contém algumas ações que permitem integrar com a URL e o título da página
3. Uma aba `Extension Data` demonstra como ler e gravar no serviço de dados da extensão
4. Uma aba `Messages` mostra como exibir mensagens globais

Há também ações no canto superior direito do hub que demonstram como abrir diálogos e painéis, incluindo conteúdo personalizado dentro deles (usado no exemplo `Panel`).

## Menu

Este exemplo adiciona um item de menu "Sample build definition menu item" ao hub `Builds`, no menu de ações em dropdown no canto superior direito da página. O handler do menu obtém a definição de build atual a partir do contexto que lhe é passado, faz uma chamada REST e mostra o resultado em uma caixa de mensagem.

## Panel

Este exemplo é utilizado dentro do exemplo `Hub`. Ele consiste em um conteúdo que contém um botão de toggle junto com botões OK/Cancel. Pode ser usado como conteúdo personalizado de um painel ou de um diálogo.

## Pivot

Este exemplo adiciona um pivot (aba) "Sample Pivot" à página inicial da Organização (Project Collection), ao lado de "Projects", "My work items" e "My pull requests".

Este pivot faz uma chamada REST para obter todos os projetos da organização e os exibe em uma visualização em grade.

## Pill

Este exemplo adiciona pills ao título da página de definição de Pipeline (Runs).

## QueryParamsHandler

Este exemplo adiciona um serviço que é carregado em qualquer página sempre que um parâmetro de query "showMyPanel" estiver presente na URL quando qualquer página for carregada. O serviço de inicialização mostra o painel personalizado do exemplo Panel, usando um parâmetro de query opcional "myPanelTitle" como título do painel.

## RepositoryActions

Este exemplo adiciona um item de menu "Sample repository action" ao seletor de repositório no cabeçalho das páginas de código (code hub). Se uma propriedade "href" for fornecida, clicar na ação irá navegar para a URL indicada. Se uma "uri" for fornecida, o código correspondente será executado quando a ação for clicada.

## RepositoryServiceHub

Este exemplo adiciona um hub "Repository Information" ao grupo de hubs `Code`. Ele demonstra como interagir com o `IVersionControlRepositoryService` para obter informações básicas sobre o repositório Git atualmente selecionado pelo usuário.

## WorkItemFormGroup

Este exemplo adiciona uma extensão "Sample WorkItem Form Group" ao formulário de work item para mostrar como interagir com o serviço `IWorkItemFormService` e com o `IWorkItemNotificationListener`. Ele fornece uma UI para demonstrar como alterar valores de campos usando o serviço de formulário e como exibir eventos de notificação do formulário de work item.

Este exemplo também fornece um exemplo de teste unitário com mocks mínimos necessários.

## WorkItemOpen

Este exemplo adiciona um hub "Sample WorkItem Open" ao grupo de hubs Boards para mostrar como interagir com o serviço `IWorkItemFormNavigationService`. Ele fornece uma UI para você abrir um work item existente (por id) ou abrir o formulário de work item para um novo item (por tipo de work item). Qualquer uma dessas opções abre um diálogo no frame hospedeiro.

# Referências

O conjunto completo de documentação para desenvolvimento de extensões pode ser encontrado em [https://docs.microsoft.com/en-us/azure/devops/extend](https://docs.microsoft.com/en-us/azure/devops/extend/?view=vsts).

# Contribuindo

Este projeto recebe contribuições e sugestões. A maioria das contribuições exige que você concorde com um Contributor License Agreement (CLA), declarando que você tem o direito de, e de fato, nos conceder os direitos de uso da sua contribuição. Para mais detalhes, visite <https://cla.microsoft.com>.

Quando você enviar um pull request, um CLA-bot irá determinar automaticamente se você precisa fornecer um CLA e irá marcar o PR de forma apropriada (por exemplo, rótulo, comentário). Basta seguir as instruções fornecidas pelo bot. Você só precisará fazer isso uma vez para todos os repositórios que usam o nosso CLA.

Este projeto adotou o [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). Para mais informações, veja o [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) ou entre em contato com [opencode@microsoft.com](mailto:opencode@microsoft.com) para quaisquer dúvidas ou comentários adicionais.
