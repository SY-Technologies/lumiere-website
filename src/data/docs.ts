import type { Locale } from "./site";
import type { Section } from "./pages";

export interface DocsSection {
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
  refs?: { term: string; description: string }[];
  code?: string;
  examples?: { title: string; body: string; code: string }[];
  note?: string;
}

export interface DocsPage {
  title: string;
  intro: string;
  sections: DocsSection[];
}

type DocsByLocale = Record<Locale, Partial<Record<Section, DocsPage>>>;

export const docs: DocsByLocale = {
  en: {
    learn: {
      title: "Learn Lumière from zero",
      intro: "Start here if you have never written code before. This guide explains the tools, the words, and the ideas before asking you to memorize Lumière syntax.",
      sections: [
        {
          id: "setup",
          title: "Set up your tools",
          body: [
            "You need three things before writing Lumière: an editor for writing files, the Lumière command-line program for running those files, and a terminal for typing commands.",
            "Use Visual Studio Code as your editor. If it is not already installed, download VS Code from Microsoft, install it, then open it.",
            "In VS Code, open the Extensions view, search for the Lumière extension, and install it. The extension helps VS Code recognize `.lum` files so Lumière code is easier to read while you type.",
          ],
          bullets: [
            "Create a folder for your learning files, for example `lumiere-apprentissage`.",
            "Open that folder in VS Code.",
            "Create a file named bonjour.lum inside the folder.",
            "Open the VS Code terminal from the Terminal menu. A terminal is the place where you type commands and read their output.",
            "Install Lumière from the download page, then check that the command works with `lumiere --version`.",
          ],
          code: `lumiere --version`,
          note: "Before moving on, make sure the terminal prints a version number. If it says it cannot find lumiere, close the terminal, open a new one, and try again. If it still fails, return to the install guide and check the PATH instructions for your platform.",
        },
        {
          id: "first-program",
          title: "Your first program",
          body: [
            "A program is a file of instructions. Each instruction tells the computer to do one small thing.",
            "Type this code into bonjour.lum. Do not worry about understanding every symbol yet. The goal is to make Lumière run one visible instruction.",
          ],
          code: `fonction principal() {
    afficher("Bonjour, monde!")
}`,
          examples: [
            {
              title: "Print two lines",
              body: "`principal` can contain more than one instruction. Lumière runs them from top to bottom, so the terminal output follows the same order as the lines in the file.",
              code: `fonction principal() {
    afficher("Bonjour")
    afficher("Bienvenue dans Lumière")
}`,
            },
            {
              title: "Change only the text",
              body: "The quotation marks are part of the syntax. The words inside them are your data. Change the words, but keep the opening and closing quotes.",
              code: `fonction principal() {
    afficher("Je viens d'écrire mon premier programme.")
}`,
            },
          ],
          note: "Save the file, then run it with `lumiere bonjour.lum` in the terminal. You should see `Bonjour, monde!`. If you do, change the text between the quotes, save, and run the command again.",
        },
        {
          id: "read-the-program",
          title: "How to read that program",
          body: [
            "Read the program from the outside in. The first line creates a named place where instructions can live. The line inside the braces is the instruction that actually prints text.",
            "The braces mark the beginning and end of a group. Everything between `{` and `}` belongs together.",
          ],
          refs: [
            { term: "`fonction`", description: "Starts a reusable group of instructions." },
            { term: "`principal`", description: "The name Lumière looks for when it starts a program file." },
            { term: "`{ ... }`", description: "Keeps related instructions together." },
            { term: "afficher(...)", description: "Shows a value in the terminal." },
            { term: "`\"Bonjour, monde!\"`", description: "Text. Text is written between quotation marks." },
          ],
          note: "A useful reading habit is to point at one symbol at a time and say what job it has. If a symbol has no job you can explain yet, leave it alone and come back after the next few sections.",
        },
        {
          id: "values",
          title: "Programs work with values",
          body: [
            "A value is a piece of information a program can use. A value can be a number, text, or an answer like yes/no.",
            "Printing values is the simplest way to check what your program is doing. Change one line, run the file again, and look at the terminal output.",
          ],
          code: `fonction principal() {
    afficher(42)
    afficher(3.14)
    afficher("Lumière")
    afficher(vrai)
}`,
          examples: [
            {
              title: "Use values directly",
              body: "A value can be written directly where it is needed. This is useful while learning because each line has one visible result.",
              code: `fonction principal() {
    afficher("Nom")
    afficher(2026)
    afficher(faux)
}`,
            },
            {
              title: "Combine text and a number",
              body: "When you put text and a number together with `+`, Lumière builds one text output. This lets you label what you print.",
              code: `fonction principal() {
    afficher("score=" + 10)
    afficher("niveau=" + 2)
}`,
            },
          ],
          note: "Run this once, then add `afficher(faux)` and run it again. 42 is an Entier, 3.14 is a Décimal, text is Texte, and `vrai`/`faux` are Logique values.",
        },
        {
          id: "variables-for-memory",
          title: "Variables give names to values",
          body: [
            "A variable is a name attached to a value. It lets you store information once and use it later.",
            "In Lumière, `soit` creates a variable. The variable name goes on the left. The value it stores goes on the right.",
          ],
          code: `fonction principal() {
    soit nom = "Ada"
    soit age = 36

    afficher(nom)
    afficher(age)
}`,
          examples: [
            {
              title: "Name a value once, reuse it several times",
              body: "The value stored in `nom` does not disappear after the first `afficher`. You can use the same variable anywhere after it has been created.",
              code: `fonction principal() {
    soit nom = "Ada"

    afficher(nom)
    afficher("Bonjour " + nom)
    afficher(nom + " apprend Lumière")
}`,
            },
            {
              title: "Update a variable when the information changes",
              body: "A variable can be assigned a new value later. Read this as: the score starts at 0, then becomes 10, then becomes 15.",
              code: `fonction principal() {
    soit score = 0
    afficher(score)

    score = 10
    afficher(score)

    score = score + 5
    afficher(score)
}`,
            },
          ],
          note: "Change `nom` to your own name and `age` to another number. Then add `afficher(\"Nom: \" + nom)`. Choose names that describe what the value means; `nom` is clearer than `x`.",
        },
        {
          id: "calculations",
          title: "Calculations produce new values",
          body: [
            "A calculation takes existing values and produces another value. Programs use calculations for numbers, text, decisions, and many other tasks.",
            "Here, Lumière multiplies price by quantity, stores the result in `total`, then prints it.",
          ],
          code: `fonction principal() {
    soit prix = 20
    soit quantite = 3
    soit total = prix * quantite

    afficher("total=" + total)
}`,
          examples: [
            {
              title: "Build a small receipt",
              body: "This example keeps each step visible. The subtotal is calculated first, then tax, then the final total. Naming each step makes the calculation easier to check.",
              code: `fonction principal() {
    soit prix = 20
    soit quantite = 3
    soit sous_total = prix * quantite
    soit taxe = sous_total * 0.05
    soit total = sous_total + taxe

    afficher("sous-total=" + sous_total)
    afficher("taxe=" + taxe)
    afficher("total=" + total)
}`,
            },
            {
              title: "Calculate an average",
              body: "An average is a total divided by a count. Write the program in the same order you would explain the idea out loud.",
              code: `fonction principal() {
    soit premiere_note = 12
    soit deuxieme_note = 16
    soit troisieme_note = 14

    soit total = premiere_note + deuxieme_note + troisieme_note
    soit moyenne = total / 3

    afficher("moyenne=" + moyenne)
}`,
            },
          ],
          note: "Make this example your first small calculator: add `taxe`, calculate `total_avec_taxe`, and print both totals. If the answer surprises you, print each variable on its own line before printing the final result.",
        },
        {
          id: "functions-explain-actions",
          title: "Functions name a reusable action",
          body: [
            "A function is a named set of instructions. You use a function when you want to repeat the same action without copying the same lines everywhere.",
            "A parameter is a value the function receives. In `saluer(nom: Texte)`, the function receives one text value and gives that value the temporary name `nom` while the function is running.",
          ],
          code: `fonction saluer(nom: Texte) -> Texte {
    retourne "Bonjour, " + nom
}

fonction principal() {
    afficher(saluer("Ada"))
    afficher(saluer("Camille"))
}`,
          examples: [
            {
              title: "Make the repeated part explicit",
              body: "Without a function, you would copy the same greeting logic for each person. With a function, the rule lives in one place and the input changes.",
              code: `fonction saluer(nom: Texte) -> Texte {
    retourne "Bonjour, " + nom
}

fonction principal() {
    soit premier = saluer("Ada")
    soit deuxieme = saluer("Grace")

    afficher(premier)
    afficher(deuxieme)
}`,
            },
            {
              title: "Use more than one parameter",
              body: "A function can receive several values. Each parameter needs a name and a type, and the call must provide the values the function needs.",
              code: `fonction presenter(nom: Texte, age: Entier) -> Texte {
    retourne nom + " a " + age + " ans"
}

fonction principal() {
    afficher(presenter("Ada", 36))
    afficher(presenter("Grace", 85))
}`,
            },
          ],
          note: "Read `saluer(nom: Texte)` as: saluer needs one Texte value named nom. Add a second function named `crier` that returns the same name with `!` at the end, then call it from `principal`.",
        },
        {
          id: "return-values",
          title: "Returning means giving an answer back",
          body: [
            "Some functions only do something, such as printing text. Other functions calculate an answer. `retourne` is how a function gives its answer back.",
            "Think of a returning function like a small question. If the program asks `double(5)`, the function answers `10`. That answer can be printed, stored in a variable, or used in another calculation.",
            "When a function reaches `retourne`, it stops running and hands back the value written after `retourne`.",
          ],
          code: `fonction double(nombre: Entier) -> Entier {
    retourne nombre * 2
}

fonction principal() {
    soit resultat = double(5)
    afficher(resultat)
    afficher(double(10))
}`,
          examples: [
            {
              title: "Return early when the answer is known",
              body: "`retourne` also stops the function. In this example, a negative score immediately returns 0, so the final line only runs for scores that are not negative.",
              code: `fonction corriger_score(score: Entier) -> Entier {
    si (score < 0) {
        retourne 0
    }

    retourne score
}

fonction principal() {
    afficher(corriger_score(-3))
    afficher(corriger_score(12))
}`,
            },
            {
              title: "Store the returned answer",
              body: "A returned value can be kept in a variable. This makes the next line easier to read because the calculation already has a name.",
              code: `fonction ajouter_taxe(prix: Décimal) -> Décimal {
    retourne prix * 1.05
}

fonction principal() {
    soit total = ajouter_taxe(20.0)
    afficher("total=" + total)
}`,
            },
          ],
          note: "`-> Entier` means this function promises to return an Entier. Try changing `retourne nombre * 2` to `retourne \"non\"` and run the file. The error is part of the lesson: Lumière is checking the promise.",
        },
        {
          id: "control-flow-basics",
          title: "Control flow is the route through a program",
          body: [
            "A program does not always run every line. Control flow means the path the program follows while it runs.",
            "Most beginner programs use three routes: run the next line, choose between paths, or repeat a group of lines.",
          ],
          refs: [
            { term: "next line", description: "After one instruction finishes, Lumière normally runs the instruction below it." },
            { term: "`si` / `sinon`", description: "Choose one path when a condition is true, and another path when it is false." },
            { term: "`pour chaque`", description: "Repeat the same instructions for each value in a list." },
            { term: "`retourne`", description: "Leave the current function immediately and give a value back." },
          ],
          note: "When a program is confusing, trace it on paper. Write the line number that runs first, then the next one, and cross out any branch that did not run.",
        },
        {
          id: "choices",
          title: "Use si when the program must choose",
          body: [
            "Programs often need to choose between two paths. A condition is a question the program can answer with `vrai` or `faux`.",
            "Use `si` for the path that should run when the answer is true. Use `sinon` for the path that should run otherwise. Only one of those two blocks runs.",
          ],
          code: `fonction afficher_statut(age: Entier) {
    si (age >= 18) {
        afficher("majeur")
    } sinon {
        afficher("mineur")
    }
}

fonction principal() {
    afficher_statut(20)
    afficher_statut(12)
}`,
          examples: [
            {
              title: "Choose a message from a score",
              body: "The condition is the question inside parentheses. If `score >= 10` is true, Lumière runs the first block. Otherwise, it runs the `sinon` block.",
              code: `fonction afficher_resultat(score: Entier) {
    si (score >= 10) {
        afficher("réussi")
    } sinon {
        afficher("à reprendre")
    }
}

fonction principal() {
    afficher_resultat(14)
    afficher_resultat(8)
}`,
            },
            {
              title: "Handle three ranges",
              body: "You can put another `si` inside `sinon` when there are more than two paths. Read the branches from top to bottom.",
              code: `fonction niveau(points: Entier) -> Texte {
    si (points >= 90) {
        retourne "excellent"
    } sinon si (points >= 60) {
        retourne "correct"
    } sinon {
        retourne "à travailler"
    }
}

fonction principal() {
    afficher(niveau(95))
    afficher(niveau(72))
    afficher(niveau(40))
}`,
            },
          ],
          note: "Change the ages to 18, 17, and 0. Then change the condition from `>= 18` to `> 18` and observe exactly which output changes.",
        },
        {
          id: "loops",
          title: "Use loops for repeated work",
          body: [
            "A loop repeats instructions. Use a loop when the same action should happen for several values.",
            "`pour chaque` means: take each value from a list, one after another, and run the same instructions for each one. In this example, `note` becomes 10, then 12, then 14. When the list is finished, the program continues after the loop.",
          ],
          code: `fonction principal() {
    soit notes = [10, 12, 14]

    pour chaque note dans notes {
        afficher(note)
    }
}`,
          examples: [
            {
              title: "Turn many values into one total",
              body: "The loop repeats the same addition for each note. `total` starts at 0, then grows each time the loop sees a new value.",
              code: `fonction principal() {
    soit notes = [10, 12, 14]
    soit total = 0

    pour chaque note dans notes {
        total = total + note
    }

    afficher("total=" + total)
}`,
            },
            {
              title: "Print numbered-looking output manually",
              body: "A loop can update more than one variable. Here `rang` tracks which item is currently being printed.",
              code: `fonction principal() {
    soit noms = ["Ada", "Grace", "Camille"]
    soit rang = 1

    pour chaque nom dans noms {
        afficher(rang + ". " + nom)
        rang = rang + 1
    }
}`,
            },
          ],
          note: "Add a variable named `total` before the loop. Inside the loop, add each `note` to `total`. After the loop, print `total`. That turns the loop from repeated printing into repeated calculation.",
        },
        {
          id: "variables-and-types",
          title: "Add types when you want clearer rules",
          body: [
            "A type says what kind of value is allowed. Entier means whole number, Texte means text, and Logique means true-or-false.",
            "Types help Lumière catch mistakes. If a function expects a number but receives text, Lumière can report the problem instead of continuing with the wrong value.",
          ],
          bullets: [
            "Common scalar types include Entier, Décimal, Logique, Texte, Rien, and Universel.",
            "Collection types include Liste[T], ListeFixe[T, N], Dictionnaire[K, V], and Ensemble[T].",
            "Décimal accepts Entier values where that is appropriate.",
            "Collections inside other collections are checked too.",
          ],
          code: `fonction moyenne(notes: Liste[Entier]) -> Décimal {
    soit total: Entier = 0

    pour chaque note dans notes {
        total = total + note
    }

    retourne total / notes.taille()
}`,
          examples: [
            {
              title: "Read type annotations as promises",
              body: "`nom: Texte` means this variable should hold text. `actif: Logique` means this variable should hold `vrai` or `faux`. The annotation documents intent and lets Lumière reject mismatches.",
              code: `fonction principal() {
    soit nom: Texte = "Ada"
    soit age: Entier = 36
    soit actif: Logique = vrai

    afficher(nom)
    afficher(age)
    afficher(actif)
}`,
            },
            {
              title: "Type the function boundary",
              body: "Function parameters are a boundary. If `totaliser` says it receives `Liste[Entier]`, callers should pass a list of whole numbers, not arbitrary values.",
              code: `fonction totaliser(nombres: Liste[Entier]) -> Entier {
    soit total: Entier = 0

    pour chaque nombre dans nombres {
        total = total + nombre
    }

    retourne total
}

fonction principal() {
    afficher(totaliser([1, 2, 3]))
}`,
            },
          ],
          note: "Copy this into a file, then add `principal` below it and call `moyenne([12, 15, 18])`. Next, try passing text instead of numbers to see how the type rule protects the function.",
        },
        {
          id: "declaration-reference",
          title: "Declaration reference",
          body: [
            "A declaration introduces a name into your program: a variable, a function, a class, or an interface. These are the forms available in the current alpha.",
          ],
          refs: [
            { term: "soit nom = valeur", description: "Create a variable and let Lumière work out its type from the value." },
            { term: "soit nom: Type = valeur", description: "Create a variable and state the type you expect." },
            { term: "soit fixe nom = valeur", description: "Create a name whose value should not be changed later." },
            { term: "fonction nom(...) { ... }", description: "Create a named group of instructions. Function parameters need types." },
            { term: "fonction nom(...) -> Type { ... }", description: "Create a function and state what type of value it returns." },
            { term: "classe Nom { ... }", description: "Declare a class with fields and methods." },
            { term: "classe Enfant : Parent { ... }", description: "Declare a class that inherits from another class." },
            { term: "interface Nom { fonction faire() }", description: "Declare an interface made of required functions." },
            { term: "`public`", description: "Allow another file to import a top-level function, class, interface, or variable." },
            { term: "`privé`", description: "Mark class fields private. Top-level private declarations are rejected." },
            { term: "`remplace fonction`", description: "Declare that a method overrides inherited behavior." },
          ],
        },
        {
          id: "collections",
          title: "Collections hold several values",
          body: [
            "A collection is one value that contains several smaller values. Use a collection when a program needs to keep a group together: several names, several scores, several paths, or several settings.",
            "The first choice is the shape of the group. Use a list when order matters. Use a dictionary when each value should be found by a key such as `nom`, `score`, or `langage`.",
            "A typed collection adds a rule for what may go inside. `Liste[Entier]` means every item in the list should be an `Entier`. `Dictionnaire[Texte, Entier]` means every key should be `Texte` and every stored value should be `Entier`.",
          ],
          bullets: [
            "Use `Liste` for an ordered group whose size can change.",
            "Use `ListeFixe` for an ordered group whose size is fixed.",
            "Use `Dictionnaire` when a key should lead directly to a value.",
            "Use `Ensemble` when membership matters more than order or duplicates.",
          ],
          code: `fonction principal() {
    soit notes: Liste[Entier] = [10, 12, 14]
    soit total = 0

    pour chaque note dans notes {
        total = total + note
    }

    afficher("total=" + total)
}`,
          examples: [
            {
              title: "Use a list when order matters",
              body: "A list keeps values in order. Index `0` reads the first item, index `1` reads the second item, and so on.",
              code: `fonction principal() {
    soit noms = ["Ada", "Grace", "Camille"]

    afficher(noms[0])
    afficher(noms[1])
    afficher("nombre=" + noms.taille())
}`,
            },
            {
              title: "Use a dictionary when names matter",
              body: "A dictionary stores values behind keys. This is useful when you want to ask for `nom` or `langage` directly instead of remembering an index.",
              code: `fonction principal() {
    soit projet = {
        "nom": "Lumière",
        "langage": "C++"
    }

    afficher(projet["nom"])
    afficher(projet["langage"])
}`,
            },
            {
              title: "Let the type catch a bad value",
              body: "The type annotation is a rule for the whole collection. If a list is declared as `Liste[Entier]`, adding text to it is a mistake Lumière can report.",
              code: `fonction principal() {
    soit notes: Liste[Entier] = [10, 12, 14]

    notes[0] = 20
    afficher(notes[0])

    // Then try this line:
    // notes[1] = "absent"
}`,
            },
          ],
          note: "Do not start by memorizing every collection type. Start with `Liste` and `Dictionnaire`. When those feel natural, `ListeFixe` and `Ensemble` become easier to understand.",
        },
        {
          id: "control-flow",
          title: "Control flow chooses the path",
          body: [
            "Control flow is the order in which a program runs. Most lines run from top to bottom, but some instructions change the path: a condition chooses one block, a loop repeats a block, and `retourne` leaves a function with an answer.",
            "Start with simple paths before using advanced forms. Use `si` when there are two or three choices. Use `pour chaque` when the same action should happen for every value in a collection. Use `agir selon` when one value has several named cases.",
          ],
          bullets: [
            "`si` asks a yes/no question and runs a block only when the answer is `vrai`.",
            "`sinon` gives the program a fallback path when the `si` condition is `faux`.",
            "`pour chaque` repeats a block once for each value in a collection.",
            "`retourne` stops the current function immediately and sends a value back to the caller.",
          ],
          code: `fonction prix_livraison(total: Décimal) -> Décimal {
    si (total >= 50.0) {
        retourne 0.0
    }

    retourne 7.5
}

fonction principal() {
    afficher(prix_livraison(80.0))
    afficher(prix_livraison(20.0))
}`,
          examples: [
            {
              title: "Choose between several messages",
              body: "The conditions are tested from top to bottom. The first true condition wins. If none of them is true, the final `sinon` block runs.",
              code: `fonction message_temperature(degres: Entier) -> Texte {
    si (degres < 0) {
        retourne "gel"
    } sinon si (degres < 20) {
        retourne "frais"
    } sinon {
        retourne "chaud"
    }
}

fonction principal() {
    afficher(message_temperature(-4))
    afficher(message_temperature(12))
    afficher(message_temperature(28))
}`,
            },
            {
              title: "Stop searching when you find the answer",
              body: "`retourne` can end a loop early because the function is finished. Here the function stops as soon as it finds the searched name.",
              code: `fonction contient_nom(noms: Liste[Texte], cherche: Texte) -> Logique {
    pour chaque nom dans noms {
        si (nom == cherche) {
            retourne vrai
        }
    }

    retourne faux
}

fonction principal() {
    afficher(contient_nom(["Ada", "Grace"], "Grace"))
    afficher(contient_nom(["Ada", "Grace"], "Camille"))
}`,
            },
            {
              title: "Use agir selon for named cases",
              body: "`agir selon` keeps several cases organized around one value. Use it when the program is not just asking yes/no, but deciding what a specific value means.",
              code: `fonction etiquette(tags: Liste[Texte]) -> Texte {
    agir selon tags.taille() {
        0 -> {
            retourne "aucun tag"
        }
        1 -> {
            retourne "un tag"
        }
        n: Entier -> {
            retourne "tags=" + n
        }
        sinon -> {
            retourne "?"
        }
    }
}`,
            },
          ],
          note: "When control flow is hard to follow, write down the values and trace which branch runs. Do not guess; follow the conditions in order.",
        },
        {
          id: "expression-reference",
          title: "Expression and operator reference",
          body: [
            "The expression surface is intentionally familiar: literals, calls, member access, indexing, arithmetic, comparisons, assignment, casts, and type tests.",
            "Named arguments bind by parameter name and can appear in any order. Unknown or duplicate named arguments are rejected.",
          ],
          refs: [
            { term: "literals", description: "Integers, decimals, booleans, text, symbols, and `rien` are supported." },
            { term: "`et` / `ou`", description: "Logical operators short-circuit." },
            { term: "`x est Type`", description: "Check whether a value has a given type." },
            { term: "`valeur en Type`", description: "Convert a value to another type when that conversion is supported." },
            { term: "`objet.membre`", description: "Read a field or method from an object, module, or built-in value surface." },
            { term: "collection[index]", description: "Read from supported indexed values such as lists, fixed lists, dictionaries, and text." },
            { term: "fonction(a: 1, b: 2)", description: "Named call arguments bind by parameter name rather than call position." },
            { term: "`ici`", description: "Reference the current receiver inside a method." },
            { term: "`parent`", description: "Dispatch to parent behavior from a class method." },
          ],
        },
        {
          id: "modules",
          title: "Modules are ordinary .lum files",
          body: [
            "A module is a file-backed Lumière source file. Public members can be imported by other files. Imports can bring in a whole module, use an alias, or select specific exported members.",
            "Use `public` on declarations that another file should be allowed to import.",
          ],
          code: `// Salutations.lum
public fonction saluer(nom: Texte) -> Texte {
    retourne "Bonjour, " + nom
}

// programme.lum
importer Salutations.{saluer}

fonction principal() {
    afficher(saluer("Ada"))
}`,
          examples: [
            {
              title: "Keep a helper in another file",
              body: "Create `Calculs.lum` for reusable calculations, then import only the public function you need from `programme.lum`.",
              code: `// Calculs.lum
public fonction doubler(nombre: Entier) -> Entier {
    retourne nombre * 2
}

// programme.lum
importer Calculs.{doubler}

fonction principal() {
    afficher(doubler(21))
}`,
            },
            {
              title: "Import a module as a namespace",
              body: "A namespace import keeps the module name in front of the function call. This is useful when the helper comes from a larger module.",
              code: `importer Maths

fonction principal() {
    soit racine = Maths.racine(81)
    afficher(racine)
}`,
            },
          ],
          note: "This example uses two files. Put them in the same folder, run `lumiere programme.lum`, then remove `public` from Salutations.lum and run again. That failure shows why exported names must be explicit.",
        },
        {
          id: "import-patterns",
          title: "Import patterns",
          body: [
            "Imports can load a module as a namespace, assign an alias, or bring selected public members into the current file.",
            "Use selective imports when the reader should see exactly where a function or type comes from. Use module aliases when several modules would otherwise create noisy names.",
          ],
          refs: [
            { term: "importer Maths", description: "Import a built-in or source module and access members through the module name." },
            { term: "importer Chemin comme C", description: "Import a module with an alias." },
            { term: "importer Salutations.{saluer}", description: "Import selected public members from a module you created." },
            { term: "importer Salutations.{saluer comme bonjour}", description: "Import a selected public member with a local alias." },
            { term: "public fonction nom(...)", description: "Make a top-level function importable from another file." },
            { term: "public classe Nom", description: "Make a class importable from another file." },
            { term: "public interface Nom", description: "Make an interface importable from another file." },
          ],
          code: `importer Chemin comme C
importer Maths

fonction principal() {
    soit chemin = C.joindre("donnees", "notes.txt")
    soit racine = Maths.racine(81.0)

    afficher(chemin)
    afficher(racine)
}`,
          note: "Change `C` to another alias such as `Paths`, then update the call site. The alias has no magic meaning; it is just the local name you chose for the module.",
        },
        {
          id: "objects",
          title: "Classes group data with behavior",
          body: [
            "A class is a plan for making objects. Use a class when several values belong together and you also want functions that work with those values.",
            "Fields are the values stored on the object. Methods are functions attached to the object. Inside a method, `ici` means the object currently receiving the method call.",
            "Inheritance and interfaces are for larger programs. Inheritance lets one class reuse fields and methods from another class. An interface describes methods a class must provide.",
          ],
          bullets: [
            "Create an object by calling the class name, such as `Personne(nom: \"Ada\", age: 36)`.",
            "Read a field with `objet.champ`, such as `p.nom`.",
            "Call a method with `objet.methode()`, such as `p.saluer()`.",
            "Use `privé` on a field when outside code should not read it directly.",
          ],
          code: `classe Personne {
    nom: Texte
    age: Entier

    fonction saluer() {
        afficher("Bonjour " + ici.nom)
    }
}

fonction principal() {
    soit p = Personne(nom: "Ada", age: 36)

    afficher(p.nom)
    afficher(p.age)
    p.saluer()
}`,
          examples: [
            {
              title: "Put related values in one object",
              body: "Without a class, `nom` and `age` are separate variables. With a class, they travel together as one `Personne` value.",
              code: `classe Personne {
    nom: Texte
    age: Entier
}

fonction principal() {
    soit ada = Personne(nom: "Ada", age: 36)
    soit grace = Personne(nom: "Grace", age: 85)

    afficher(ada.nom)
    afficher(grace.nom)
}`,
            },
            {
              title: "Use ici inside a method",
              body: "`ici.nom` means the `nom` field on the object that received the method call. The same method works for both objects because `ici` changes with the receiver.",
              code: `classe Personne {
    nom: Texte

    fonction presentation() -> Texte {
        retourne "Je suis " + ici.nom
    }
}

fonction principal() {
    soit ada = Personne(nom: "Ada")
    soit grace = Personne(nom: "Grace")

    afficher(ada.presentation())
    afficher(grace.presentation())
}`,
            },
            {
              title: "Reuse behavior with inheritance",
              body: "`Chien : Animal` means a `Chien` has the fields and methods declared on `Animal`. The child class can add its own fields.",
              code: `classe Animal {
    nom: Texte

    fonction decrire() {
        afficher("Animal: " + ici.nom)
    }
}

classe Chien : Animal {
    race: Texte
}

fonction principal() {
    soit c = Chien(nom: "Rex", race: "Berger")
    afficher(c.race)
    c.decrire()
}`,
            },
            {
              title: "Use an interface for an expected method",
              body: "An interface is a promise about behavior. `Rapport réalise Presentable` means `Rapport` must provide the method required by `Presentable`.",
              code: `interface Presentable {
    fonction presenter() -> Texte
}

classe Rapport réalise Presentable {
    titre: Texte

    fonction presenter() -> Texte {
        retourne "rapport: " + ici.titre
    }
}

fonction principal() {
    soit rapport = Rapport(titre: "Alpha")
    afficher(rapport.presenter())
}`,
            },
          ],
          note: "Do not start every program with classes. Start with variables and functions. Introduce a class when a group of values keeps appearing together and the same operations belong with that group.",
        },
        {
          id: "shell-and-tests",
          title: "Use the shell and tests while learning",
          body: [
            "Running lumiere with no arguments opens an interactive shell. It keeps declarations between submissions and accepts multiline blocks.",
            "LumiTest suites run from the command line with lumiere tester. Use the shell for quick exploration and tests for repeatable behavior.",
          ],
          code: `lumiere
:aide
:quitter

lumiere tester tests
lumiere tester tests --verbeux
lumiere tester tests --filtre "nom du test"`,
          note: "Use the shell for one-line questions such as `1 + 2` or a tiny function. Use a saved `.lum` file as soon as the code has more than a few lines.",
        },
        {
          id: "testing-with-lumitest",
          title: "Testing means checking behavior on purpose",
          body: [
            "A test is a small program that checks another piece of code. Instead of running your program, looking at the output, and deciding by eye whether it is correct, a test states the expected result directly in code.",
            "Testing matters because programs change. You may improve a function today and accidentally break something that worked yesterday. A good test catches that break immediately.",
            "In Lumière, tests use the built-in `LumiTest` module. A test has a name, some code to run, and one or more checks such as `vérifier_égal`.",
          ],
          refs: [
            { term: "Arrange", description: "Create the values the test needs." },
            { term: "Act", description: "Call the function or run the operation being tested." },
            { term: "Assert", description: "Check the result with `LumiTest.vérifier`, `vérifier_égal`, or another assertion." },
            { term: "Failure", description: "A useful failure tells you which behavior changed and what result was expected." },
          ],
          code: `importer LumiTest

fonction additionner(a: Entier, b: Entier) -> Entier {
    retourne a + b
}

LumiTest.test("additionne deux nombres", fonction() {
    soit resultat = additionner(2, 3)

    LumiTest.vérifier_égal(5, resultat)
})`,
          examples: [
            {
              title: "Start with the smallest useful test",
              body: "This test checks one behavior: adding two whole numbers. The function may be rewritten later, but the behavior should stay the same.",
              code: `importer LumiTest

fonction additionner(a: Entier, b: Entier) -> Entier {
    retourne a + b
}

LumiTest.test("2 + 3 donne 5", fonction() {
    LumiTest.vérifier_égal(5, additionner(2, 3))
})`,
            },
            {
              title: "Make the failure teach you something",
              body: "Run this test once as written. Then change `5` to `6` and run it again. The failure shows that the test is actually checking the result.",
              code: `importer LumiTest

fonction doubler(nombre: Entier) -> Entier {
    retourne nombre * 2
}

LumiTest.test("double 4", fonction() {
    LumiTest.vérifier_égal(8, doubler(4))
})`,
            },
            {
              title: "Test behavior, not implementation",
              body: "The test does not care how `est_pair` is written. It only states examples that must remain true.",
              code: `importer LumiTest

fonction est_pair(nombre: Entier) -> Logique {
    retourne nombre % 2 == 0
}

LumiTest.test("nombres pairs", fonction() {
    LumiTest.vérifier(est_pair(2))
    LumiTest.vérifier(est_pair(10))
    LumiTest.vérifier_égal(faux, est_pair(3))
})`,
            },
            {
              title: "Group related cases",
              body: "A group gives several tests a shared name. Use groups when a function has several important cases, such as normal input, empty input, and edge cases.",
              code: `importer LumiTest

fonction saluer(nom: Texte) -> Texte {
    retourne "Bonjour, " + nom
}

LumiTest.groupe("Salutations", fonction() {
    LumiTest.test("nom simple", fonction() {
        LumiTest.vérifier_égal("Bonjour, Ada", saluer("Ada"))
    })

    LumiTest.test("nom vide", fonction() {
        LumiTest.vérifier_égal("Bonjour, ", saluer(""))
    })
})`,
            },
            {
              title: "Check that an error is intentional",
              body: "Some functions are supposed to reject bad input. `vérifier_lance` checks that the code inside the anonymous function raises an error.",
              code: `importer LumiTest

fonction diviser(a: Entier, b: Entier) -> Entier {
    si (b == 0) {
        lancer "division par zéro"
    }

    retourne a / b
}

LumiTest.test("refuse la division par zéro", fonction() {
    LumiTest.vérifier_lance(fonction() {
        diviser(10, 0)
    })
})`,
            },
          ],
          note: "Put tests in a `tests` folder and run them with `lumiere tester tests`. Write tests for behavior you would be annoyed to break accidentally.",
        },
        {
          id: "stdlib-in-practice",
          title: "Using the built-in modules",
          body: [
            "Built-in modules are imported like source modules. Use them for focused tasks: Maths for numeric work, Texte for text helpers, Chemin for lexical paths, Fichier for filesystem state, Temps for time values, Aléatoire for random values, LumiNet for network programs, and LumiTest for tests.",
            "Chemin does not check the filesystem. Build or normalize path strings with Chemin, then ask Fichier whether those paths exist or contain data.",
          ],
          code: `importer Chemin
importer Fichier
importer Maths

fonction principal() {
    soit dossier = Chemin.joindre("notes", "alpha")
    soit fichier = Chemin.joindre(dossier, "resultat.txt")

    si (non Fichier.existe(dossier)) {
        Fichier.creer_dossiers(dossier)
    }

    soit score = Maths.arrondir(Maths.racine(81.0))
    Fichier.ecrire_texte(fichier, "score=" + score)

    afficher(Fichier.lire_texte(fichier))
}`,
          note: "Run this from an empty practice folder, then inspect the generated `notes/alpha/resultat.txt` file in VS Code. The point is to connect each line of code to the visible file it created.",
        },
        {
          id: "stdlib-maths",
          title: "Maths: numbers you can trust",
          body: [
            "Use Maths when a program needs more than basic `+`, `-`, `*`, and `/`. The module gives you named constants, rounding helpers, roots, powers, logarithms, trigonometry, and predicates that answer questions about numbers.",
            "The most important beginner habit is to choose the helper that matches the meaning of the value you want. `arrondir` rounds to the nearest integer. `plancher` goes down. `plafond` goes up. `tronquer` removes the decimal part.",
            "Maths helpers are ordinary function calls. Put the value you want to calculate inside the parentheses, store the answer in a variable if you will use it again, and print small intermediate results while learning.",
          ],
          bullets: [
            "Use `Entier` for whole counts such as attempts, ages, indexes, and quantities.",
            "Use `Décimal` for measurements such as distance, ratios, averages, and percentages.",
            "Check invalid domains before calling a helper: do not pass a negative value to `racine`, and do not pass zero as the degree to `racine_n`.",
            "Do not compare floating-point results as if they were always exact. When testing decimals, use LumiTest.vérifier_approx.",
          ],
          refs: [
            { term: "Maths.pi / Maths.e", description: "Useful constants for circle formulas and natural logarithms." },
            { term: "Maths.absolu(nombre)", description: "Distance from zero. `Maths.absolu(-7)` returns `7`." },
            { term: "Maths.min(a, b) / Maths.max(a, b)", description: "Choose the smaller or larger of two numbers." },
            { term: "Maths.racine(nombre)", description: "Square root. The number must not be negative." },
            { term: "Maths.racine_n(nombre, degré)", description: "Nth root. Degree cannot be zero; even roots of negative numbers are rejected." },
            { term: "Maths.puissance(base, exposant)", description: "Raise a number to a power." },
            { term: "Maths.est_pair / Maths.est_impair", description: "Ask whether an integer is even or odd." },
          ],
          code: `importer Maths

fonction principal() {
    soit rayon = 5
    soit aire = Maths.pi * Maths.puissance(rayon, 2)

    afficher("aire arrondie=" + Maths.arrondir(aire))
    afficher("racine de 81=" + Maths.racine(81))
    afficher("4 est pair=" + Maths.est_pair(4))
}`,
          examples: [
            {
              title: "Choose the right rounding helper",
              body: "Rounding helpers answer different questions. Use `plancher` when you need the lower whole value, `plafond` when you need the upper whole value, and `arrondir` when you need the nearest whole value.",
              code: `importer Maths

fonction principal() {
    soit prix = 12.75

    afficher(Maths.plancher(prix))
    afficher(Maths.plafond(prix))
    afficher(Maths.arrondir(prix))
}`,
            },
            {
              title: "Guard a calculation before calling it",
              body: "`Maths.racine` expects a non-negative number. Check the value first when it may come from a user, a file, or another calculation.",
              code: `importer Maths

fonction afficher_racine(nombre: Décimal) {
    si (nombre < 0.0) {
        afficher("racine impossible")
        retourne
    }

    afficher(Maths.racine(nombre))
}

fonction principal() {
    afficher_racine(81.0)
    afficher_racine(-4.0)
}`,
            },
          ],
          note: "Change `rayon` to 10 and predict the new area before running. Trigonometry helpers such as sin, cos, and tan use radians. Convert degrees with degres_vers_radians before using them.",
        },
        {
          id: "stdlib-texte",
          title: "Texte: clean, split, search, and convert text",
          body: [
            "Text work usually starts with one of four questions: is the text empty, does it contain something, how should it be split, or how should it be cleaned before use.",
            "Most Texte helpers are available in two forms. You can call them as methods on a text value, such as `nom.elaguer()`, or through the module, such as `Texte.elaguer(nom)`. Use the method form when you already have a text value in front of you.",
            "A useful beginner workflow is: clean the text, check that it has the shape you expect, split it into parts, then convert only the pieces that should become numbers or booleans.",
          ],
          bullets: [
            "Use `elaguer` before parsing user input so accidental spaces do not become part of the value.",
            "Use `index_de` when the position matters; use `contient` when you only need a yes/no answer.",
            "After `separer`, inspect the list size before reading indexes if the input might be malformed.",
            "`en_logique` accepts `vrai` and `faux`; it is not a loose truthiness conversion.",
          ],
          refs: [
            { term: "texte.taille()", description: "Length of the stored text representation. In the current alpha this follows the runtime string length, not Unicode grapheme counting." },
            { term: "texte.elaguer()", description: "Remove whitespace from both ends. Use elaguer_gauche or elaguer_droite for one side." },
            { term: "texte.contient(fragment)", description: "Return `vrai` when the fragment appears in the text." },
            { term: "texte.index_de(fragment)", description: "Return the first position, or `-1` if the fragment is absent." },
            { term: "texte.separer(separateur)", description: "Split text into a list. The separator must not be empty." },
            { term: "texte.en_entier() / en_decimal() / en_logique()", description: "Convert text into typed values. Conversion fails if the whole text is not valid." },
            { term: "Texte.joindre(liste, separateur)", description: "Join a list of text values into one text value." },
          ],
          code: `importer Texte

fonction principal() {
    soit ligne = "  Ada,Lovelace,36  "
    soit propre = ligne.elaguer()
    soit morceaux = propre.separer(",")

    soit prenom = morceaux[0]
    soit nom = morceaux[1]
    soit age = morceaux[2].en_entier()

    afficher(prenom + " " + nom)
    afficher(age + 1)
    afficher(Texte.joindre([prenom, nom], " "))
}`,
          examples: [
            {
              title: "Clean input before using it",
              body: "Extra spaces are common in copied text and typed input. Clean first, then compare or convert.",
              code: `fonction principal() {
    soit reponse = "  oui  "
    soit propre = reponse.elaguer()

    afficher(propre)
    afficher(propre == "oui")
}`,
            },
            {
              title: "Split only after choosing a separator",
              body: "`separer` turns one text value into a list. After splitting, check the list size before assuming every piece exists.",
              code: `fonction principal() {
    soit ligne = "Ada;36;Lumière"
    soit morceaux = ligne.separer(";")

    afficher("morceaux=" + morceaux.taille())
    afficher(morceaux[0])
    afficher(morceaux[1].en_entier())
}`,
            },
          ],
          note: "Change `ligne` to `Grace,Hopper,85` without surrounding spaces and run again. Then remove one comma and observe why checking `morceaux.taille()` matters before reading indexes.",
        },
        {
          id: "stdlib-chemin",
          title: "Chemin: build paths before touching files",
          body: [
            "A path is text that points to a possible file or folder. Chemin helps you build and inspect that text without reading the disk.",
            "This distinction matters: `Chemin.joindre(\"notes\", \"jour1.txt\")` builds a path. It does not create a folder and it does not check whether the file exists. Use Fichier for those questions.",
            "Keep path construction in one place. Build paths from stable pieces instead of hand-writing separators into strings; that makes the program easier to change when a folder name changes.",
          ],
          bullets: [
            "Use `joindre` instead of writing `\"dossier/fichier.txt\"` by hand when a path is assembled from pieces.",
            "Use `nom`, `extension`, and `dossier` when you need to explain or validate a path before using it.",
            "Use `normaliser` to simplify text paths that contain `.` or `..`.",
            "Use `absolu` when printing diagnostics so the user can see the exact path your program meant.",
          ],
          refs: [
            { term: "Chemin.joindre(...segments)", description: "Join path segments and normalize `.` / `..` parts." },
            { term: "Chemin.nom(chemin)", description: "Return the final file or folder name." },
            { term: "Chemin.extension(chemin)", description: "Return the extension, including the dot, such as `.lum`." },
            { term: "Chemin.dossier(chemin)", description: "Return the parent folder portion." },
            { term: "Chemin.parties(chemin)", description: "Return normalized path parts as a list of text values." },
            { term: "Chemin.absolu(chemin)", description: "Turn a relative path into an absolute path using the current working directory." },
          ],
          code: `importer Chemin

fonction principal() {
    soit source = Chemin.joindre("src", "exemples", "..", "bonjour.lum")

    afficher(source)
    afficher(Chemin.nom(source))
    afficher(Chemin.nom_sans_extension(source))
    afficher(Chemin.extension(source))
    afficher(Chemin.dossier(source))
}`,
          examples: [
            {
              title: "Build paths from pieces",
              body: "When a path is made of several pieces, use `Chemin.joindre`. The code says which pieces matter without forcing you to hand-write separators.",
              code: `importer Chemin

fonction principal() {
    soit dossier = Chemin.joindre("journal", "2026")
    soit fichier = Chemin.joindre(dossier, "juillet.txt")

    afficher(fichier)
    afficher(Chemin.dossier(fichier))
}`,
            },
            {
              title: "Inspect a path before using it",
              body: "Chemin helps you ask questions about path text. This is useful before a program decides whether to accept a filename.",
              code: `importer Chemin

fonction principal() {
    soit fichier = "notes/bonjour.lum"

    afficher(Chemin.nom(fichier))
    afficher(Chemin.nom_sans_extension(fichier))
    afficher(Chemin.extension(fichier))
}`,
            },
          ],
          note: "Add `afficher(Chemin.absolu(source))` and compare the relative path with the absolute one. Chemin returns normalized path text; it does not create, read, or delete anything.",
        },
        {
          id: "stdlib-fichier",
          title: "Fichier: read, write, list, move, and delete",
          body: [
            "Fichier is the module that talks to the host filesystem. That makes it useful, but also worth treating carefully: write operations can create files, replace content, move files, or delete data.",
            "Start with a safe pattern: create a dedicated folder, write inside it, read back what you wrote, then list that same folder. Avoid using deletion helpers until you are certain which path they receive.",
            "A filesystem program should normally separate three steps: prepare the path with Chemin, check the current state with Fichier.existe or Fichier.est_dossier, then perform the read or write.",
          ],
          bullets: [
            "Use `ecrire_texte` when the file should contain exactly the new content. It replaces existing content.",
            "Use `ajouter_texte` when you are building a log or appending a new record.",
            "Use `lire_lignes` when each line has meaning, such as one task, one name, or one score per line.",
            "Use `lister_recursif` only when you actually need nested files; shallow `lister` is easier to reason about.",
            "Treat `supprimer_arbre` as a dangerous operation. Print the path first while learning.",
          ],
          refs: [
            { term: "Fichier.existe(path)", description: "Return whether a path currently exists." },
            { term: "Fichier.est_fichier / est_dossier", description: "Ask what kind of filesystem entry exists at a path." },
            { term: "Fichier.lire_texte / lire_lignes", description: "Read a whole file as text or as a list of lines." },
            { term: "Fichier.ecrire_texte / ajouter_texte", description: "Create or replace text, or append text to the end of a file." },
            { term: "Fichier.ecrire_lignes(path, lignes)", description: "Write a list of text values as newline-separated lines." },
            { term: "Fichier.lister / lister_recursif", description: "Return sorted path entries in a folder, shallow or recursive." },
            { term: "Fichier.copier / deplacer / supprimer", description: "Copy, rename/move, or delete a file path." },
          ],
          code: `importer Chemin
importer Fichier

fonction principal() {
    soit dossier = "atelier-fichiers"
    soit chemin = Chemin.joindre(dossier, "notes.txt")

    si (non Fichier.existe(dossier)) {
        Fichier.creer_dossiers(dossier)
    }

    Fichier.ecrire_lignes(chemin, ["un", "deux", "trois"])

    soit lignes = Fichier.lire_lignes(chemin)
    afficher(lignes.taille())
    afficher(lignes[0])
    afficher(Fichier.est_fichier(chemin))
}`,
          examples: [
            {
              title: "Write, then read back",
              body: "The safest first file program writes to a folder made for practice, then immediately reads the same file back.",
              code: `importer Chemin
importer Fichier

fonction principal() {
    soit dossier = "atelier-fichiers"
    soit fichier = Chemin.joindre(dossier, "message.txt")

    si (non Fichier.existe(dossier)) {
        Fichier.creer_dossiers(dossier)
    }

    Fichier.ecrire_texte(fichier, "Bonjour")
    afficher(Fichier.lire_texte(fichier))
}`,
            },
            {
              title: "Append when history matters",
              body: "`ecrire_texte` replaces content. `ajouter_texte` appends content. Use append for logs, journals, and accumulated records.",
              code: `importer Chemin
importer Fichier

fonction principal() {
    soit fichier = Chemin.joindre("atelier-fichiers", "journal.txt")

    Fichier.ecrire_texte(fichier, "début\\n")
    Fichier.ajouter_texte(fichier, "suite\\n")

    afficher(Fichier.lire_texte(fichier))
}`,
            },
          ],
          note: "After the first run, open `atelier-fichiers/notes.txt` in VS Code. Then change the list to four lines and run again. `supprimer_arbre` removes a folder tree recursively; use it only with paths your program created intentionally.",
        },
        {
          id: "stdlib-temps",
          title: "Temps: instants, durations, and formatted time",
          body: [
            "Temps separates two ideas that beginners often mix up. An `Instant` is a point in time. A `Durée` is an amount of time. You add a duration to an instant; you measure the duration between two instants.",
            "The timestamp used by Temps is milliseconds since the Unix epoch. You rarely need to think about that while learning, but it is useful when saving a precise time or comparing two times.",
            "When writing time code, name variables according to what they represent. Names such as `debut`, `fin`, and `duree` prevent confusion between a point in time and an amount of time.",
          ],
          bullets: [
            "Use `Temps.maintenant()` when you need a rich Instant with date/time methods.",
            "Use `Temps.horodatage()` when you only need a comparable or storable integer timestamp.",
            "Use `Temps.entre(a, b)` instead of manually subtracting timestamps when you want a Durée value.",
            "Use formatting tokens exactly: `AAAA` for year, `MM` for month, `JJ` for day, `HH` for hour, `mm` for minute, `ss` for second, and `SSS` for milliseconds.",
          ],
          refs: [
            { term: "Temps.maintenant()", description: "Return the current Instant." },
            { term: "Temps.horodatage()", description: "Return the current timestamp in milliseconds." },
            { term: "Temps.depuis_horodatage(ms)", description: "Create an Instant from a millisecond timestamp." },
            { term: "Temps.analyser(text, format)", description: "Parse text into an Instant using tokens like AAAA, MM, JJ, HH, mm, ss, and SSS." },
            { term: "instant.formater(format)", description: "Format an Instant with the same tokens." },
            { term: "Temps.secondes(n), minutes(n), heures(n), jours(n)", description: "Create Durée values." },
            { term: "Temps.entre(debut, fin)", description: "Return the Durée from one Instant to another." },
          ],
          code: `importer Temps

fonction principal() {
    soit debut = Temps.depuis_horodatage(1704078245123)
    soit fin = debut.ajouter(Temps.minutes(90))
    soit duree = Temps.entre(debut, fin)

    afficher(debut.formater("AAAA-MM-JJ HH:mm:ss.SSS"))
    afficher(fin.formater("HH:mm:ss"))
    afficher(duree.en_minutes())
}`,
          examples: [
            {
              title: "Format the same instant in different ways",
              body: "Formatting does not change the instant. It only changes how the instant is shown to the reader.",
              code: `importer Temps

fonction principal() {
    soit instant = Temps.depuis_horodatage(1704078245123)

    afficher(instant.formater("AAAA-MM-JJ"))
    afficher(instant.formater("HH:mm:ss"))
}`,
            },
            {
              title: "Add a duration to plan a later time",
              body: "Use durations for amounts of time. Add a duration to an instant when you want a future instant.",
              code: `importer Temps

fonction principal() {
    soit debut = Temps.depuis_horodatage(1704078245123)
    soit fin = debut.ajouter(Temps.heures(2))

    afficher(fin.formater("HH:mm:ss"))
}`,
            },
          ],
          note: "Change `Temps.minutes(90)` to `Temps.heures(2)` and predict the formatted end time. Temps.attendre pauses the program for a positive Durée; keep examples short so the program does not look frozen.",
        },
        {
          id: "stdlib-aleatoire",
          title: "Aléatoire: random values and repeatable experiments",
          body: [
            "Use Aléatoire when a program needs chance: a dice roll, a random choice, a shuffled list, or a sample from a list.",
            "The module also has `graine`. A seed makes the random sequence repeatable. That is useful in lessons and tests because you can get the same random result every time you run the example.",
            "Randomness is easiest to learn when you first make it repeatable. Add `Aléatoire.graine(...)`, understand the program, then remove the seed when you want fresh results each run.",
          ],
          bullets: [
            "`entier(min, max)` includes both boundaries. A dice roll is `entier(1, 6)`.",
            "`choisir` is for one value from a non-empty list.",
            "`échantillon` is for several distinct values. The requested count must be between zero and the list size.",
            "`mélanger` changes the original list. If you need the original order later, keep a separate copy before shuffling.",
          ],
          refs: [
            { term: "Aléatoire.graine(n)", description: "Reset the random generator to a repeatable state." },
            { term: "Aléatoire.entier(min, max)", description: "Return an integer between min and max, including both ends." },
            { term: "Aléatoire.décimal()", description: "Return a decimal from 0 up to, but not including, 1." },
            { term: "Aléatoire.décimal_entre(min, max)", description: "Return a decimal inside the requested range." },
            { term: "Aléatoire.choisir(liste)", description: "Pick one value from a non-empty list." },
            { term: "Aléatoire.mélanger(liste)", description: "Shuffle the list in place and return that same list." },
            { term: "Aléatoire.échantillon(liste, n)", description: "Return n distinct values sampled from the list." },
          ],
          code: `importer Aléatoire

fonction principal() {
    Aléatoire.graine(42)

    soit faces = [1, 2, 3, 4, 5, 6]
    soit lancer = Aléatoire.choisir(faces)
    soit main = Aléatoire.échantillon(["as", "roi", "dame", "valet"], 2)

    afficher("dé=" + lancer)
    afficher(main.joindre(", "))
}`,
          examples: [
            {
              title: "Roll several dice",
              body: "`entier(1, 6)` includes both 1 and 6. This makes it a direct model for a standard die.",
              code: `importer Aléatoire

fonction principal() {
    Aléatoire.graine(7)

    afficher(Aléatoire.entier(1, 6))
    afficher(Aléatoire.entier(1, 6))
    afficher(Aléatoire.entier(1, 6))
}`,
            },
            {
              title: "Choose from a list",
              body: "Use `choisir` when the possible values are already in a list. The list must not be empty.",
              code: `importer Aléatoire

fonction principal() {
    Aléatoire.graine(3)

    soit couleurs = ["rouge", "vert", "bleu"]
    afficher(Aléatoire.choisir(couleurs))
}`,
            },
          ],
          note: "Run this several times with the same seed: the result should repeat. Then remove `Aléatoire.graine(42)` and run again. The accentless module name Aleatoire is also accepted.",
        },
        {
          id: "stdlib-luminet",
          title: "LumiNet: addresses, HTTP, sockets, and live channels",
          body: [
            "LumiNet is the standard module for programs that talk to other programs. It covers the usual layers: addresses, DNS, HTTP requests, HTTP servers, raw TCP streams, UDP datagrams, and Canal connections for ongoing message exchange.",
            "Network code is different from local code because another machine, service, firewall, port, or DNS record can decide the outcome. A correct Lumière program can still fail if the address is wrong, the server is down, the port is already in use, or the current build was compiled without LumiNet support.",
            "Learn LumiNet from the safest layer to the most demanding one: validate addresses, resolve names, make one HTTP request, write a small HTTP handler, then use TCP, UDP, or Canal when HTTP is not the right shape for the job.",
          ],
          bullets: [
            "Use `LumiNet.Adresse` before opening a connection when you want to validate text such as `127.0.0.1:8080`, split the host from the port, or check whether an address is local.",
            "Use `LumiNet.DNS` when a user gives you a name like `localhost` and you need the address that the network stack will actually try.",
            "Use `LumiNet.HTTP` for ordinary request/response work: fetching a page, calling a local service, sending a small payload, or checking status and headers.",
            "Use `LumiNet.HTTP.Serveur` when Lumière should answer HTTP requests. Routes can read path parameters, query values, request headers, and request bodies.",
            "Use `LumiNet.TCP` for stream protocols where both sides keep a connection open and read/write text or bytes.",
            "Use `LumiNet.UDP` for datagrams: small independent packets, broadcast, discovery, or cases where losing a packet is acceptable.",
            "Use `LumiNet.Canal` when the program needs ongoing messages over a WebSocket-style connection instead of a single HTTP response.",
          ],
          refs: [
            { term: "LumiNet.Adresse.analyser(texte)", description: "Parses `host:port` text and returns an object with `hôte`, `port`, and `en_texte()`." },
            { term: "LumiNet.Adresse.est_valide / est_ipv4 / est_ipv6 / est_locale", description: "Answers address questions before the program tries to connect." },
            { term: "LumiNet.Adresse.locale()", description: "Returns a local address object. Useful for diagnostics and local tools." },
            { term: "LumiNet.DNS.résoudre / résoudre_tous / résoudre_inverse", description: "Resolves one address, all addresses, or the name associated with an IP address." },
            { term: "délai / delai", description: "Optional timeout argument for supported client operations. It is a Durée value, commonly created with `Temps.secondes(...)`." },
            { term: "LumiNet.HTTP.obtenir / créer / modifier / supprimer", description: "Sends GET, POST, PUT, or DELETE requests. Named arguments include `corps`, `type`, `entêtes`/`entetes`, and `délai`/`delai`." },
            { term: "RéponseHTTP", description: "HTTP client responses expose `statut`, `corps`, `succès`, `entête(nom)`, and `entêtes()`." },
            { term: "LumiNet.HTTP.Serveur()", description: "Creates a server with `OBTENIR`, `CRÉER`, `MODIFIER`, `SUPPRIMER`, `avant`, `canal`, `écouter`, and `arrêter`/`arreter`." },
            { term: "RequêteHTTP", description: "Server handlers receive a request object with `méthode`, `chemin`, `corps`, `paramètre(nom)`, `requête(nom, défaut?)`, `entête(nom)`, and `entêtes()`." },
            { term: "RéponseServeurHTTP", description: "Server handlers answer with `envoyer`, `envoyer_json`, `envoyer_fichier`, `rediriger`, and `définir_entête`." },
            { term: "LumiNet.TCP.connecter / LumiNet.TCP.Serveur", description: "Opens TCP clients or servers. Connections support `écrire`, `écrire_octets`, `lire`, `lire_ligne`, `lire_octets`, `définir_délai`, `est_connecté`, and `fermer`." },
            { term: "LumiNet.UDP.ouvrir(port?)", description: "Opens a UDP socket. Sockets support `envoyer`, `envoyer_octets`, `diffuser`, `recevoir`, `recevoir_octets`, `définir_délai`, and `fermer`." },
            { term: "LumiNet.Canal.connecter / LumiNet.Canal.Serveur", description: "Creates WebSocket-style clients or servers with callbacks for opening, messages, disconnection, and errors." },
          ],
          code: `importer LumiNet
importer Temps

fonction principal() {
    soit adresse = LumiNet.Adresse.analyser("127.0.0.1:8080")
    afficher(adresse.hôte)
    afficher(adresse.port)

    soit réponse = LumiNet.HTTP.obtenir(
        "http://example.com",
        délai: Temps.secondes(2)
    )

    afficher(réponse.statut)
    afficher(réponse.succès)
}`,
          examples: [
            {
              title: "Check and parse addresses before connecting",
              body: "This is the first LumiNet habit to build. It separates mistakes in a user-provided address from real connection failures.",
              code: `importer LumiNet

fonction principal() {
    soit adresse = LumiNet.Adresse.analyser("127.0.0.1:8080")

    afficher(adresse.hôte)
    afficher(adresse.port)
    afficher(adresse.en_texte())

    afficher(LumiNet.Adresse.est_valide("127.0.0.1"))
    afficher(LumiNet.Adresse.est_ipv4("127.0.0.1"))
    afficher(LumiNet.Adresse.est_ipv6("::1"))
    afficher(LumiNet.Adresse.est_locale("127.0.0.1"))
}`,
            },
            {
              title: "Resolve a name before explaining a connection",
              body: "`localhost` is a name. DNS resolution answers which address the system maps it to. Use this when your program needs to show the destination it will try.",
              code: `importer LumiNet

fonction principal() {
    soit ip = LumiNet.DNS.résoudre("localhost")
    afficher(ip)

    soit adresses = LumiNet.DNS.résoudre_tous("localhost")
    afficher(adresses.taille())

    soit nom = LumiNet.DNS.résoudre_inverse("127.0.0.1")
    afficher(nom)
}`,
            },
            {
              title: "Understand `délai` before using network calls",
              body: "`délai` means timeout: the maximum time the operation should wait. It is optional, but it is useful while learning because a missing server can otherwise make the program look frozen.",
              code: `importer LumiNet
importer Temps

fonction principal() {
    soit sans_délai = LumiNet.HTTP.obtenir("http://example.com")

    soit avec_délai = LumiNet.HTTP.obtenir(
        "http://example.com",
        délai: Temps.secondes(2)
    )

    afficher(sans_délai.statut)
    afficher(avec_délai.statut)
}`,
            },
            {
              title: "Treat HTTP as request, status, headers, and body",
              body: "An HTTP response is not just text. `statut` tells you what happened, `succès` is true for 2xx statuses, `corps` is the response body, and `entête` reads one header.",
              code: `importer LumiNet
importer Temps

fonction principal() {
    soit réponse = LumiNet.HTTP.obtenir(
        "http://example.com",
        délai: Temps.secondes(2)
    )

    afficher(réponse.statut)
    afficher(réponse.succès)
    afficher(réponse.entête("Content-Type"))

    si (réponse.succès) {
        afficher(réponse.corps)
    } sinon {
        afficher("La requête a échoué.")
    }
}`,
            },
            {
              title: "Send a small HTTP payload",
              body: "`créer` sends POST, `modifier` sends PUT, and `supprimer` sends DELETE. Use `corps` for the payload and `type` for the `Content-Type` header.",
              code: `importer LumiNet
importer Temps

fonction principal() {
    soit réponse = LumiNet.HTTP.créer(
        "http://127.0.0.1:8080/messages",
        corps: "bonjour",
        type: "text/plain",
        délai: Temps.secondes(2)
    )

    afficher(réponse.statut)
    afficher(réponse.succès)
}`,
            },
            {
              title: "Write a small HTTP server",
              body: "A route handler receives a request and a response writer. Path parameters come from `:nom`; query values come from the part after `?`; headers come from the request.",
              code: `importer LumiNet

fonction bonjour(req: Universel, rep: Universel) {
    soit nom = req.paramètre("nom")
    soit ton = req.requête("ton", "simple")

    rep.définir_entête("X-Lumiere", "ok")
    rep.envoyer(200, "Bonjour " + nom + " (" + ton + ")")
}

fonction principal() {
    soit serveur = LumiNet.HTTP.Serveur()
    serveur.OBTENIR("/bonjour/:nom", bonjour)
    serveur.écouter("127.0.0.1", 8080)
}`,
            },
            {
              title: "Use middleware for shared HTTP work",
              body: "`avant` registers a function that runs before the route handler. The third parameter, often named `suivant`, continues to the next step. This is useful for headers or logging that should apply to several routes.",
              code: `importer LumiNet

fonction ajouter_entête(req: Universel, rep: Universel, suivant: Universel) {
    rep.définir_entête("X-Outil", "lumiere")
    suivant()
}

fonction statut(req: Universel, rep: Universel) {
    rep.envoyer(200, "statut=ok")
}

fonction principal() {
    soit serveur = LumiNet.HTTP.Serveur()
    serveur.avant(ajouter_entête)
    serveur.OBTENIR("/statut", statut)
    serveur.écouter("127.0.0.1", 8080)
}`,
            },
            {
              title: "Redirect or serve a file from an HTTP handler",
              body: "The response writer has different response shapes. Use `rediriger` when the client should request another URL. Use `envoyer_fichier` when a regular file should become the response body; LumiNet chooses a content type from the file extension.",
              code: `importer LumiNet

fonction accueil(req: Universel, rep: Universel) {
    rep.rediriger("/index.html")
}

fonction page(req: Universel, rep: Universel) {
    rep.envoyer_fichier(200, "site/index.html")
}

fonction principal() {
    soit serveur = LumiNet.HTTP.Serveur()
    serveur.OBTENIR("/", accueil)
    serveur.OBTENIR("/index.html", page)
    serveur.écouter("127.0.0.1", 8080)
}`,
            },
            {
              title: "Use TCP when you need a stream",
              body: "TCP is a continuous connection. One side writes bytes or text; the other side reads from the same stream. Add a delay when a read should not wait forever.",
              code: `importer LumiNet
importer Temps

fonction principal() {
    soit connexion = LumiNet.TCP.connecter(
        "127.0.0.1",
        9000,
        délai: Temps.secondes(2)
    )

    connexion.écrire("bonjour\\n")
    afficher(connexion.est_connecté())
    connexion.fermer()
}`,
            },
            {
              title: "Write a TCP echo server",
              body: "A TCP server needs a `quand_connexion` callback before it can listen. The callback receives a connection object. This example reads one line, writes one answer, and closes that connection.",
              code: `importer LumiNet
importer Temps

fonction répondre(connexion: Universel) {
    connexion.définir_délai(Temps.secondes(10))

    soit ligne = connexion.lire_ligne()
    connexion.écrire("écho:" + ligne + "\\n")
    connexion.fermer()
}

fonction principal() {
    soit serveur = LumiNet.TCP.Serveur()
    serveur.quand_connexion(répondre)
    serveur.écouter("127.0.0.1", 9000)
}`,
            },
            {
              title: "Use UDP when each message is its own packet",
              body: "UDP does not create a connection. You open a socket, send a datagram, and receive datagrams that include their sender address and port. Set a delay before receiving.",
              code: `importer LumiNet
importer Temps

fonction principal() {
    soit socket = LumiNet.UDP.ouvrir(9001)
    socket.définir_délai(Temps.secondes(2))

    socket.envoyer("salut", "127.0.0.1", 9001)

    soit paquet = socket.recevoir()
    afficher(paquet.données)
    afficher(paquet.adresse)
    afficher(paquet.port)

    socket.fermer()
}`,
            },
            {
              title: "Send UDP bytes or broadcast text",
              body: "`envoyer_octets` and `recevoir_octets` are for protocols that work with raw byte values. `diffuser` sends a text datagram to the broadcast address on a port.",
              code: `importer LumiNet
importer Temps

fonction principal() {
    soit socket = LumiNet.UDP.ouvrir()
    socket.définir_délai(Temps.secondes(2))

    socket.envoyer_octets([76, 85, 77], "127.0.0.1", 9001)
    socket.diffuser("lumiere?", 9001)

    socket.fermer()
}`,
            },
            {
              title: "Use Canal for ongoing messages",
              body: "Canal is for WebSocket-style exchange. The client registers callbacks, sends a message, then waits so incoming messages can be delivered to `quand_message`.",
              code: `importer LumiNet

fonction reçu(message: Universel) {
    afficher(message)
}

fonction principal() {
    soit canal = LumiNet.Canal.connecter("ws://127.0.0.1:8080/chat")
    canal.quand_message(reçu)
    canal.envoyer("salut")
    canal.attendre()
}`,
            },
            {
              title: "Write a Canal server",
              body: "A Canal server is organized around callbacks. `quand_connexion` runs when a client arrives; `quand_message` runs each time a text message arrives; `quand_déconnexion` and `quand_erreur` are available for lifecycle handling.",
              code: `importer LumiNet

fonction sur_connexion(client: Universel) {
    client.envoyer("bienvenue")
}

fonction sur_message(client: Universel, message: Universel) {
    client.envoyer("écho:" + message)
}

fonction principal() {
    soit serveur = LumiNet.Canal.Serveur()
    serveur.quand_connexion(sur_connexion)
    serveur.quand_message(sur_message)
    serveur.écouter("127.0.0.1", 8081)
}`,
            },
            {
              title: "Upgrade an HTTP route to Canal",
              body: "`LumiNet.HTTP.Serveur` can also expose a Canal route with `canal`. Use this when the same local server should answer ordinary HTTP routes and WebSocket-style message routes.",
              code: `importer LumiNet

fonction canal_ouvert(client: Universel) {
    client.envoyer("prêt")
}

fonction principal() {
    soit serveur = LumiNet.HTTP.Serveur()
    serveur.canal("/chat", canal_ouvert)
    serveur.écouter("127.0.0.1", 8080)
}`,
            },
          ],
          note: "The current HTTP client supports plain `http` URLs. Server examples keep listening until you stop the program or call `arrêter`/`arreter` from your own logic. Use explicit delays for client calls and socket reads while learning, because waiting forever is usually a program design mistake.",
        },
        {
          id: "quick-reference",
          title: "Command quick reference",
          body: [
            "These are the everyday commands worth memorizing while learning Lumière.",
          ],
          refs: [
            { term: "lumiere fichier.lum", description: "Run a source file." },
            { term: "lumiere", description: "Open the persistent interactive shell." },
            { term: "lumiere tester tests", description: "Run LumiTest files under a test directory." },
            { term: "lumiere --help", description: "Show command-line help." },
            { term: "lumiere --version", description: "Print the installed version." },
          ],
        },
      ],
    },
    examples: {
      title: "Lumière examples",
      intro: "Larger programs that show how Lumière code is structured when the goal is more than a single language feature.",
      sections: [
        {
          id: "how-to-read-examples",
          title: "How to read these examples",
          body: [
            "These examples are not first-lesson snippets. They are meant to show how Lumière programs are shaped when they combine functions, collections, classes, modules, and standard-library APIs.",
            "The examples stay within the current alpha. They do not pretend Lumière has a JSON parser, database driver, TLS client, package server, or asynchronous runtime when those are not part of the documented surface.",
            "Start by reading the function names. Then read the data model. Only after that, read the body of each function. Serious programs become easier to understand when the names describe the job of each part.",
          ],
          bullets: [
            "Use functions to isolate decisions: parsing, validation, lookup, formatting, and output should not all live in one block.",
            "Use typed collections when the values should have one shape throughout the program.",
            "Use classes when several values travel together and the name of the object matters.",
            "Use LumiNet examples as local-development examples first. Bind to `127.0.0.1` while learning.",
          ],
        },
        {
          id: "multi-file-task-tracker",
          title: "Multi-file project: typed task tracker",
          body: [
            "A serious Lumière program should not grow as one giant file. Split stable concepts into modules, export only what other files need with `public`, and keep `main.lum` focused on orchestration.",
            "This project is deliberately flat because the current importer handles sibling modules cleanly from the project root. It still demonstrates real separation: domain model, statistics, table output, and application entry point.",
            "Run the project from the folder that contains `main.lum` so imports such as `importer Taches.{...}` resolve against the project files.",
          ],
          refs: [
            { term: "Taches.lum", description: "Domain model: the `Tache` class and task operations." },
            { term: "Statistiques.lum", description: "Pure calculations over a list of tasks." },
            { term: "Tableau.lum", description: "Terminal presentation for task rows." },
            { term: "main.lum", description: "Program entry point: imports modules, creates data, mutates state, and prints the report." },
          ],
          code: `lumiere-projet/
  main.lum
  Taches.lum
  Statistiques.lum
  Tableau.lum`,
          examples: [
            {
              title: "Taches.lum",
              body: "The domain file owns the `Tache` type. Other files do not need to know how a task is created or marked complete.",
              code: `public classe Tache {
    id: Entier
    titre: Texte
    priorite: Entier
    terminee: Logique

    fonction etiquette() -> Texte {
        soit statut = "ouverte"

        si (ici.terminee) {
            statut = "terminee"
        }

        retourne "#" + ici.id + " [" + statut + "] " + ici.titre
    }
}

public fonction creer(id: Entier, titre: Texte, priorite: Entier) -> Tache {
    retourne Tache(id: id, titre: titre, priorite: priorite, terminee: faux)
}

public fonction terminer(tache: Tache) {
    tache.terminee = vrai
}

public fonction est_terminee(tache: Tache) -> Logique {
    retourne tache.terminee
}`,
            },
            {
              title: "Statistiques.lum",
              body: "This module imports the task type and one domain question, then exposes calculations that do not print anything.",
              code: `importer Taches.{Tache, est_terminee}

public fonction compter_terminees(taches: Liste[Tache]) -> Entier {
    soit total = 0

    pour chaque tache dans taches {
        si (est_terminee(tache)) {
            total = total + 1
        }
    }

    retourne total
}

public fonction compter_ouvertes(taches: Liste[Tache]) -> Entier {
    retourne taches.taille() - compter_terminees(taches)
}`,
            },
            {
              title: "Tableau.lum",
              body: "Presentation is isolated from the domain and statistics. If the output format changes, this is the file to edit.",
              code: `importer Taches.{Tache}

public fonction afficher_tableau(taches: Liste[Tache]) {
    afficher("TACHES")
    afficher("------")

    pour chaque tache dans taches {
        afficher(tache.etiquette() + " priorité=" + tache.priorite)
    }
}`,
            },
            {
              title: "main.lum",
              body: "`main.lum` composes the modules. It creates the list, changes one task, then asks the report modules to do their jobs.",
              code: `importer Taches.{Tache, creer, terminer}
importer Statistiques.{compter_ouvertes, compter_terminees}
importer Tableau.{afficher_tableau}

fonction principal() {
    soit taches: Liste[Tache] = []

    taches.ajouter(creer(1, "concevoir API", 10))
    taches.ajouter(creer(2, "écrire documentation", 7))
    taches.ajouter(creer(3, "corriger tests", 9))

    terminer(taches[1])

    afficher_tableau(taches)
    afficher("ouvertes=" + compter_ouvertes(taches))
    afficher("terminees=" + compter_terminees(taches))
}`,
            },
          ],
          note: "From inside `lumiere-projet`, run `lumiere main.lum`.",
        },
        {
          id: "file-backed-task-log",
          title: "File-backed program: task log",
          body: [
            "A useful command-line program often needs a small amount of persistence. Lumière can read and write files through `Fichier`; combine it with `Chemin` so paths are built in one place.",
            "This example creates a data folder if needed, writes an initial file, appends another line, reads the file back as lines, and prints a numbered report.",
            "The file is plain text on purpose. Plain text is easy to inspect in VS Code and easy to recover if the program changes later.",
          ],
          refs: [
            { term: "Chemin.joindre", description: "Builds the file path from stable path parts." },
            { term: "Fichier.creer_dossiers", description: "Creates the data folder before writing inside it." },
            { term: "Fichier.ecrire_lignes", description: "Writes a list of text values as newline-separated lines." },
            { term: "liste.ajouter + Fichier.ecrire_lignes", description: "Adds a task to the in-memory list, then writes the full line list back to disk." },
            { term: "Fichier.lire_lignes", description: "Reads the file back as a list so each task can be handled separately." },
          ],
          code: `importer Chemin
importer Fichier

fonction preparer_fichier() -> Texte {
    soit dossier = "donnees"
    soit chemin = Chemin.joindre(dossier, "taches.txt")

    si (non Fichier.existe(dossier)) {
        Fichier.creer_dossiers(dossier)
    }

    si (non Fichier.existe(chemin)) {
        Fichier.ecrire_lignes(chemin, ["concevoir API", "écrire tests"])
    }

    retourne chemin
}

fonction ajouter_tache(chemin: Texte, titre: Texte) {
    soit propre = titre.elaguer()

    si (propre == "") {
        retourne
    }

    soit lignes = Fichier.lire_lignes(chemin)
    lignes.ajouter(propre)
    Fichier.ecrire_lignes(chemin, lignes)
}

fonction afficher_taches(chemin: Texte) {
    soit lignes = Fichier.lire_lignes(chemin)
    soit numero = 1

    pour chaque ligne dans lignes {
        afficher(numero + ". " + ligne)
        numero = numero + 1
    }
}

fonction principal() {
    soit chemin = preparer_fichier()

    ajouter_tache(chemin, "documenter Fichier")
    afficher_taches(chemin)
}`,
          note: "Run this from a practice folder. It creates `donnees/taches.txt`, then reads it back.",
        },
        {
          id: "luminet-task-server",
          title: "Full LumiNet server: task API with HTTP and Canal",
          body: [
            "This is a complete local server shape: shared middleware, route handlers, in-memory state, plain-text responses, request bodies, path parameters, status responses, and a Canal route for live messages.",
            "The server keeps data in memory. That is intentional. LumiNet gives networking primitives; it does not provide a database layer. If the process stops, the in-memory tasks disappear.",
            "The HTTP API uses simple text response bodies because the current documented standard library does not include a JSON module or string escape support for embedded quotes. The example uses `id=...;titre=...` response text for correctness.",
          ],
          refs: [
            { term: "GET /statut", description: "Health endpoint returning a small text response." },
            { term: "GET /taches/:id", description: "Reads one task by path parameter." },
            { term: "POST /taches", description: "Creates one task from the raw request body." },
            { term: "GET /", description: "Redirects to `/statut`." },
            { term: "Canal /evenements", description: "Accepts a WebSocket-style connection and sends a welcome event." },
          ],
          code: `importer LumiNet

soit taches: Dictionnaire[Texte, Texte] = {}
soit prochain_id = 0

fonction texte_tache(id: Texte, titre: Texte) -> Texte {
    retourne "id=" + id + ";titre=" + titre
}

fonction repondre(rep: Universel, statut: Entier, corps: Texte) {
    rep.définir_entête("X-Lumiere", "exemples")
    rep.envoyer(statut, corps)
}

fonction journal(req: Universel, rep: Universel, suivant: Universel) {
    afficher(req.méthode + " " + req.chemin)
    rep.définir_entête("Access-Control-Allow-Origin", "*")
    suivant()
}

fonction accueil(req: Universel, rep: Universel) {
    rep.rediriger("/statut")
}

fonction statut(req: Universel, rep: Universel) {
    repondre(rep, 200, "statut=ok;service=taches")
}

fonction creer_tache(req: Universel, rep: Universel) {
    soit titre = req.corps.elaguer()

    si (titre == "") {
        repondre(rep, 400, "erreur=titre manquant")
        retourne
    }

    prochain_id = prochain_id + 1
    soit id = "" + prochain_id
    taches[id] = titre

    repondre(rep, 201, texte_tache(id, titre))
}

fonction lire_tache(req: Universel, rep: Universel) {
    soit id = req.paramètre("id")

    si (non taches.contient(id)) {
        repondre(rep, 404, "erreur=tache introuvable")
        retourne
    }

    repondre(rep, 200, texte_tache(id, taches[id]))
}

fonction canal_evenements(client: Universel) {
    client.envoyer("connecté au flux des tâches")
    client.envoyer("taches=" + taches.taille())
}

fonction principal() {
    soit serveur = LumiNet.HTTP.Serveur()

    serveur.avant(journal)
    serveur.OBTENIR("/", accueil)
    serveur.OBTENIR("/statut", statut)
    serveur.OBTENIR("/taches/:id", lire_tache)
    serveur.CRÉER("/taches", creer_tache)
    serveur.canal("/evenements", canal_evenements)

    afficher("Serveur Lumière sur http://127.0.0.1:8080")
    serveur.écouter("127.0.0.1", 8080)
}`,
          note: "Run this as a local service. The current HTTP client/server examples use plain `http`, and this server keeps listening until you stop the process.",
        },
        {
          id: "search-and-sort",
          title: "Binary search and insertion sort",
          body: [
            "Binary search is useful when the list is already sorted. It cuts the search range in half at every step.",
            "Insertion sort is useful as a teaching sort because it shows the central idea clearly: keep the left part sorted, then insert the next value into the correct position.",
          ],
          code: `importer Maths

fonction rechercher_binaire(valeurs: Liste[Entier], cible: Entier) -> Entier {
    soit gauche = 0
    soit droite = valeurs.taille() - 1

    tant que (gauche <= droite) {
        soit milieu = Maths.tronquer((gauche + droite) / 2)
        soit valeur = valeurs[milieu]

        si (valeur == cible) {
            retourne milieu
        }

        si (valeur < cible) {
            gauche = milieu + 1
        } sinon {
            droite = milieu - 1
        }
    }

    retourne -1
}

fonction tri_insertion(valeurs: Liste[Entier]) -> Liste[Entier] {
    soit i = 1

    tant que (i < valeurs.taille()) {
        soit cle = valeurs[i]
        soit j = i - 1

        tant que (j >= 0) {
            si (valeurs[j] <= cle) {
                arrêter
            }

            valeurs[j + 1] = valeurs[j]
            j = j - 1
        }

        valeurs[j + 1] = cle
        i = i + 1
    }

    retourne valeurs
}

fonction principal() {
    soit nombres = tri_insertion([7, 3, 9, 1, 4])

    afficher(nombres.joindre(","))
    afficher(rechercher_binaire(nombres, 4))
    afficher(rechercher_binaire(nombres, 8))
}`,
          note: "The search returns the position of the value, or `-1` when the value is absent.",
        },
        {
          id: "text-analysis",
          title: "Text analysis with dictionaries",
          body: [
            "A dictionary is a natural fit for counting. The key is the item being counted, and the value is the number of times it has appeared.",
            "This example normalizes the text, splits it into words, skips empty pieces, and updates counts in a typed dictionary.",
          ],
          code: `fonction compter_mots(texte: Texte) -> Dictionnaire[Texte, Entier] {
    soit resultat: Dictionnaire[Texte, Entier] = {}
    soit mots = texte.elaguer().minuscules().separer(" ")

    pour chaque mot dans mots {
        soit propre = mot.elaguer()

        si (propre == "") {
            continuer
        }

        si (resultat.contient(propre)) {
            resultat[propre] = resultat[propre] + 1
        } sinon {
            resultat[propre] = 1
        }
    }

    retourne resultat
}

fonction principal() {
    soit comptes = compter_mots("lumiere code lumiere test code")

    afficher(comptes["lumiere"])
    afficher(comptes["code"])
    afficher(comptes.cles().joindre(","))
}`,
          note: "This is deliberately simple tokenization. It splits on spaces; punctuation handling can be added as another cleaning step.",
        },
        {
          id: "graph-shortest-path",
          title: "Shortest path in an unweighted graph",
          body: [
            "Breadth-first search explores a graph in waves. It is the standard way to find a shortest path when every edge has the same cost.",
            "The queue holds places still to explore. The `visites` dictionary prevents loops. The `precedent` dictionary records how the algorithm reached each node so the final path can be rebuilt.",
          ],
          code: `fonction plus_court_chemin(
    graphe: Dictionnaire[Texte, Liste[Texte]],
    depart: Texte,
    arrivee: Texte
) -> Liste[Texte] {
    soit file: Liste[Texte] = [depart]
    soit visites: Dictionnaire[Texte, Logique] = {}
    soit precedent: Dictionnaire[Texte, Texte] = {}

    visites[depart] = vrai

    tant que (non file.vide()) {
        soit courant = file.retirer_a(0)

        si (courant == arrivee) {
            arrêter
        }

        pour chaque voisin dans graphe[courant] {
            si (non visites.contient(voisin)) {
                visites[voisin] = vrai
                precedent[voisin] = courant
                file.ajouter(voisin)
            }
        }
    }

    si (non visites.contient(arrivee)) {
        retourne []
    }

    soit chemin: Liste[Texte] = []
    soit courant = arrivee

    tant que (courant != depart) {
        chemin.inserer(0, courant)
        courant = precedent[courant]
    }

    chemin.inserer(0, depart)
    retourne chemin
}

fonction principal() {
    soit graphe: Dictionnaire[Texte, Liste[Texte]] = {
        "A": ["B", "C"],
        "B": ["A", "D"],
        "C": ["A", "D", "E"],
        "D": ["B", "C", "F"],
        "E": ["C", "F"],
        "F": ["D", "E"]
    }

    soit chemin = plus_court_chemin(graphe, "A", "F")
    afficher(chemin.joindre(" -> "))
}`,
        },
        {
          id: "class-based-scheduler",
          title: "A priority scheduler with classes",
          body: [
            "Classes are useful when a program needs named records. A task is not just a dictionary entry here; it has a title, a priority, and behavior through `decrire`.",
            "The scheduler keeps the list sorted as tasks are inserted. Higher priority tasks stay closer to the front.",
          ],
          code: `classe Tache {
    titre: Texte
    priorite: Entier

    fonction decrire() -> Texte {
        retourne "[" + ici.priorite + "] " + ici.titre
    }
}

fonction inserer_tache(file: Liste[Tache], tache: Tache) {
    soit position = 0

    tant que (position < file.taille()) {
        si (file[position].priorite < tache.priorite) {
            arrêter
        }

        position = position + 1
    }

    file.inserer(position, tache)
}

fonction principal() {
    soit file: Liste[Tache] = []

    inserer_tache(file, Tache(titre: "corriger bug réseau", priorite: 10))
    inserer_tache(file, Tache(titre: "écrire documentation", priorite: 6))
    inserer_tache(file, Tache(titre: "nettoyer exemples", priorite: 8))

    pour chaque tache dans file {
        afficher(tache.decrire())
    }
}`,
          note: "This is the same idea used in many schedulers: insert or choose work according to a priority rule.",
        },
      ],
    },
    architecture: {
      title: "Architecture reference",
      intro: "How Lumière reads French source, reports errors, executes programs, and exposes native capabilities through the standard library.",
      sections: [
        {
          id: "french-source",
          title: "French source and accented identifiers",
          body: [
            "Lumière accepts French keywords and accented names at the lexical layer. Identifier scanning allows non-ASCII UTF-8 bytes, so names such as `âge`, `élève`, `réponse`, `délai`, and `arrêter` are valid source text instead of special cases handled later.",
            "Several keywords and APIs also provide ASCII aliases where that is useful for keyboards, terminals, or cross-platform typing. Examples include `réalise`/`realise`, `privé`/`prive`, `arrêter`/`arreter`, and `Aléatoire`/`Aleatoire`.",
          ],
          refs: [
            { term: "Identifier start", description: "Letters, `_`, and UTF-8 leading bytes are accepted at the start of a name." },
            { term: "Identifier continuation", description: "Letters, digits, `_`, and UTF-8 continuation bytes are accepted after the first character." },
            { term: "Symbols", description: "`Symbole` literals validate that the content is exactly one Unicode character." },
            { term: "Text helpers", description: "Text length and indexing use Unicode character helpers where user-visible character counting matters." },
          ],
          code: `token {
  type: IDENT | keyword | literal | operator
  lexeme: original source bytes
  line, column: user-facing position
  start_offset, end_offset: byte range for tooling
  start_line, start_column: diagnostic anchor
}

identifier:
  first: ASCII letter | "_" | UTF-8 leading byte
  rest: ASCII letter | digit | "_" | UTF-8 byte`,
        },
        {
          id: "execution-pipeline",
          title: "Execution pipeline",
          body: [
            "The first stages are shared. Source text is tokenized, parsed into statements and expressions, then wrapped as an analysis result that can contain either a program or diagnostics.",
            "After analysis, the command decides what to do. A check command stops at diagnostics. Inspection reads the analyzed program as editor data. Normal execution sends the program to an execution backend. VM inspection lowers the program and prints the compiled representation.",
          ],
          refs: [
            { term: "Tokenization", description: "Turns bytes into tokens while preserving line, column, and byte offsets for diagnostics." },
            { term: "Parsing", description: "Turns tokens into statements and expressions: declarations, calls, classes, interfaces, loops, imports, returns, and error handling." },
            { term: "Analysis result", description: "Carries parsed statements and diagnostics together so commands can decide whether to continue." },
            { term: "Execution", description: "Runs `principal` through the selected backend after the source has parsed successfully." },
          ],
          code: `analyze_source(source, source_path):
  tokens = lex(source)
  diagnostics = lexer.diagnostics

  if diagnostics has errors:
    return { statements: [], diagnostics }

  statements = parse(tokens)
  diagnostics += parser.diagnostics

  return { statements, diagnostics }

command dispatch:
  check      -> analysis only
  inspect    -> analysis + position query
  run        -> analysis + backend execution
  vm inspect -> analysis + LIR + bytecode dump`,
        },
        {
          id: "diagnostics",
          title: "Diagnostics",
          body: [
            "Diagnostics are built from source ranges, severity, messages, and optional source paths. The same diagnostic structure supports terminal output and structured JSON output for tools.",
            "Lexer diagnostics are collected first. If they contain errors, parsing is skipped. If lexing succeeds, parser diagnostics are added. Runtime errors then use call-site information so failures in execution still point back to source.",
          ],
          bullets: [
            "A diagnostic should identify the smallest useful source range.",
            "Parser recovery should keep reporting independent syntax problems when possible.",
            "Messages should describe the language rule, not internal implementation details.",
            "JSON output should remain stable enough for editor tooling.",
          ],
          code: `Diagnostic {
  severity: error | warning | information | hint
  message: string
  source_path: string
  range: {
    start_line, start_column
    end_line, end_column
    start_offset, end_offset
  }
}

failure flow:
  lexer error -> diagnostic -> parser skipped
  parser error -> diagnostic -> no execution
  runtime error -> RuntimeSite -> diagnostic-style report`,
        },
        {
          id: "ast-shape",
          title: "AST shape",
          body: [
            "The AST separates expressions from statements. Expressions produce values. Statements perform actions, introduce names, change control flow, or group other statements.",
            "This split matters because the interpreter and VM lowering both consume the same source-level structure. A new syntax feature should be placed in the AST according to what it means, not according to how it was written textually.",
          ],
          refs: [
            { term: "Expression nodes", description: "Literals, identifiers, binary and unary operations, casts, type checks, function expressions, calls, lists, dictionaries, member access, and index access." },
            { term: "Statement nodes", description: "Blocks, variable declarations, function declarations, class declarations, interface declarations, imports, branches, loops, returns, throws, try/catch/finally, and expression statements." },
            { term: "Visitors", description: "Interpreter and compiler passes consume nodes through expression and statement visitors, which keeps traversal explicit." },
            { term: "Tokens in nodes", description: "AST nodes keep important tokens so later phases can report source locations and names accurately." },
          ],
          code: `Expr
  Literal(token)
  Identifier(name)
  Binary(left, op, right)
  Call(callee, paren, args)
  MemberAccess(object, dot, member)
  IndexAccess(object, bracket, index)
  FunctionExpr(keyword, params, return_type, body)

Stmt
  VarDecl(name, type, initializer)
  FunctionDecl(name, params, return_type, body)
  ClassDecl(name, fields, methods, interfaces)
  Import(module, alias, selected_members)
  If / For / While / Return / Throw / Try

consumer contract:
  parser creates nodes
  interpreter visits nodes
  VM compiler lowers nodes
  diagnostics use node tokens`,
          note: "If a feature cannot be represented cleanly as expression, statement, declaration, or module behavior, the design should be clarified before implementation.",
        },
        {
          id: "control-flow",
          title: "Control flow in execution",
          body: [
            "Some language constructs do not produce normal values. `retourne`, `arrêter`, `continuer`, and `lancer` change the execution path. The direct interpreter models these as control transfers so a deeply nested statement can exit the current function, loop, or try block correctly.",
            "The VM represents the same idea with explicit bytecode operations and jumps. Branches, loops, exception regions, throws, and returns become instruction-level control flow instead of recursive AST traversal.",
          ],
          bullets: [
            "`retourne` exits the current function and carries the returned value.",
            "`arrêter` exits the nearest loop.",
            "`continuer` skips to the next loop iteration.",
            "`lancer` starts error propagation until a matching handler receives it.",
            "`essayer` / `attraper` / `finalement` must preserve both user-visible errors and cleanup behavior.",
          ],
          code: `tree-walk control transfers:
  Return(value)      -> caught by current function call
  Break              -> caught by nearest loop
  Continue           -> caught by nearest loop iteration
  Throw(value/site)  -> caught by matching try handler

VM control transfers:
  RETURN
  JUMP / JUMP_IF_FALSE
  TRY_BEGIN / TRY_END
  THROW`,
        },
        {
          id: "tree-walk",
          title: "Tree-walk interpreter",
          body: [
            "The tree-walk interpreter executes the AST directly. It is the reference path for language behavior because it evaluates the same statement and expression structures produced by the parser.",
            "This backend owns the direct semantics of variable scopes, function calls, closures, object instances, fields, methods, inheritance, interfaces, imports, returns, loop control, throws, and native calls.",
          ],
          refs: [
            { term: "Environment", description: "Stores names, scopes, and closures during direct execution." },
            { term: "Control flow", description: "`retourne`, `arrêter`, `continuer`, and `lancer` are represented as runtime control transfers, not ordinary values." },
            { term: "Modules", description: "Imports load modules, evaluate them once, and expose only public members." },
            { term: "Native calls", description: "Standard-library functions are exposed as runtime functions and receive Lumière values as arguments." },
          ],
          code: `Interpreter state:
  globals: Environment
  current: Environment
  module cache: module name/path -> evaluated Module
  runtime annotations: Value -> optional type information

execute(stmt):
  Block       -> child Environment
  VarDecl     -> bind name in current Environment
  Function    -> capture closure Environment
  Class       -> build class value with fields/methods
  Import      -> load/evaluate module then bind public members
  Return      -> throw/carry return control transfer`,
        },
        {
          id: "vm",
          title: "VM backend",
          body: [
            "The VM backend compiles a parsed program instead of executing the AST directly. It lowers the program into LIR, emits bytecode, finds `principal`, and runs the resulting bytecode module.",
            "The VM path exists to make execution more explicit. LIR gives maintainers a representation between source-shaped AST and compact bytecode. Bytecode then gives the VM a small instruction stream to execute.",
          ],
          refs: [
            { term: "AST", description: "The parsed program produced by the front end." },
            { term: "LIR", description: "A lowered representation where operations and module links are made explicit." },
            { term: "Bytecode", description: "The compact instruction format executed by the VM." },
            { term: "Disassembly", description: "A readable bytecode view used to inspect compiled output." },
          ],
          code: `VM compile:
  Program(statements, source_path)
    -> link source module + imports
    -> lower each function/class/interface/module member to LIR
    -> locate principal()
    -> emit ModuleBytecode(entry_function)
    -> VM executes entry chunk

VM inspection:
  Program -> LIR -> bytecode -> disassembly`,
          note: "For supported features, tree-walk and VM behavior should match. Any difference should be documented as an alpha limitation or fixed as a bug.",
        },
        {
          id: "lir-bytecode",
          title: "LIR and bytecode design",
          body: [
            "LIR is a lowered representation with explicit operands. Instead of embedding AST nodes directly, LIR instructions refer to constants, globals, locals, temporaries, functions, blocks, types, members, captures, classes, interfaces, argument names, and namespaces through indexed operands.",
            "Control flow in LIR is block-based. Regular instructions do work inside a block, and each block ends with one terminator: jump, branch, return value, or return nil. This removes implicit fallthrough from the lowered form.",
            "Bytecode is the compact VM format emitted from LIR. It has opcodes for constants, globals, locals, captures, closures, try/throw, jumps, arithmetic, comparisons, calls, member access, classes, interfaces, namespaces, collections, casts, type checks, assertions, match errors, stack pop, and return.",
          ],
          refs: [
            { term: "Constants", description: "Literal values are stored in tables and referenced by index." },
            { term: "Locals and captures", description: "Function-local names and closed-over names are separated so closures can be represented explicitly." },
            { term: "Members", description: "Member names are indexed so member get, set, and call operations can be encoded compactly." },
            { term: "Source locations", description: "LIR and bytecode carry source coordinates for diagnostics and disassembly." },
          ],
          code: `LirOperand:
  constant(index) | global(index) | local(index)
  temp(index) | function(index) | block(index)
  type(index) | member(index) | capture(index)
  class(index) | interface(index) | namespace(index)

LirBlock:
  instructions: LirInstruction[]
  terminator: jump | branch | return_value | return_nil

Bytecode function:
  name, arity, optional_params
  local_slot_count, capture_count
  constants[]
  code[]
  source_locations[]`,
        },
        {
          id: "runtime-values",
          title: "Runtime values",
          body: [
            "Runtime values are the common representation used by user code, built-in modules, native functions, object instances, and both execution backends.",
            "The value model covers scalar values, collections, callable values, classes, interfaces, module objects, and `rien`. This is why changes to a value kind are high impact: display, equality, type checks, indexing, native argument validation, and VM interoperability can all be affected.",
          ],
          refs: [
            { term: "Scalars", description: "`Entier`, `Décimal`, `Logique`, `Texte`, `Symbole`, and `rien`." },
            { term: "Collections", description: "`Liste`, `ListeFixe`, `Dictionnaire`, and `Ensemble`." },
            { term: "Callables", description: "User functions and native functions share the same call boundary." },
            { term: "Objects", description: "Class instances and native module objects expose fields and callable members." },
          ],
          code: `Value {
  type:
    ENTIER | DECIMAL | LOGIQUE | SYMBOLE | TEXTE
    LISTE | LISTE_FIXE | DICTIONNAIRE | ENSEMBLE
    OBJET | FONCTION | CLASSE | INTERFACE | RIEN

  data:
    scalar payload
    shared collection storage
    shared object/function/class/interface storage
}

collection storage:
  ListeData: Value[]
  ListeFixeData: Value[]
  DictData: [Value, Value][]
  EnsembleData: Value[]`,
        },
        {
          id: "objects-classes-interfaces",
          title: "Objects, classes, and interfaces",
          body: [
            "Objects expose fields and methods through the runtime value system. User-defined class instances and native objects from modules use the same general member-access model: a value can have named fields, and some fields are callable values.",
            "Classes define construction behavior, fields, methods, inheritance, and visibility. Interfaces define expected method shapes. The runtime checks these relationships at the places where values cross declared boundaries.",
          ],
          bullets: [
            "Field access and method calls should behave consistently for user objects and native module objects.",
            "Private members should remain implementation details of the object or class.",
            "Interface checks should report missing or incompatible behavior through normal diagnostics/runtime errors.",
            "Native objects should use ordinary Lumière values for exposed state instead of leaking host-specific structures.",
          ],
          code: `LumiereObject:
  fields: Map<string, Value>
  native_state?: shared host state

LumiereClass:
  name
  fields
  methods
  parent?
  implemented_interfaces

LumiereFunction:
  name
  params
  closure?
  body?          // user function
  native_handler? // standard-library function`,
        },
        {
          id: "stdlib-registration",
          title: "Standard-library registration",
          body: [
            "Built-in modules are registered by name and expose public members through the same module-member model used by Lumière imports. A native function is wrapped as a Lumière function value before it is stored as a public member.",
            "This keeps the import surface consistent. `importer Maths`, `importer Fichier`, and `importer LumiNet` expose modules, values, and functions through the same runtime mechanism instead of giving each library a separate calling convention.",
          ],
          refs: [
            { term: "Public values", description: "Constants and module objects are stored as public module members." },
            { term: "Public functions", description: "Native handlers are wrapped as callable Lumière function values." },
            { term: "Argument checks", description: "Helpers validate argument count and types before native behavior runs." },
            { term: "Runtime errors", description: "Invalid arguments and host failures are reported through the runtime error path." },
          ],
          code: `Module {
  name: string
  members: Map<string, Value>
  public_members: Set<string>
  state?: RuntimeModuleState
}

register_builtin_module(module):
  match module.name
    "Maths"     -> bind constants/functions
    "Texte"     -> bind functions + text member resolver
    "Chemin"    -> bind pure path helpers
    "Fichier"   -> bind filesystem effects
    "Temps"     -> bind Instant/Durée constructors
    "Aléatoire" -> bind random generator functions
    "LumiNet"   -> bind capability objects
    "LumiTest"  -> bind stateful test API`,
        },
        {
          id: "native-boundary",
          title: "Native boundary",
          body: [
            "Native standard-library functions receive runtime values, validate them, execute host behavior, and return runtime values. The boundary is deliberately narrow: Lumière values enter, Lumière values leave, and invalid use becomes a Lumière runtime error.",
            "This boundary is what lets native modules feel like ordinary Lumière modules. A filesystem function, math helper, HTTP request, test assertion, or time formatter is still called as a Lumière function from user code.",
          ],
          bullets: [
            "Validate argument count before reading arguments.",
            "Validate value types before converting them to host values.",
            "Convert host results back into Lumière values before returning.",
            "Convert host failures into runtime errors with useful operation names.",
            "Keep native state behind Lumière objects when a capability needs lifetime, callbacks, sockets, or server state.",
          ],
          code: `native function call:
  RuntimeArgument[] + RuntimeSite
    -> validate arity
    -> validate named arguments
    -> validate Value types
    -> convert to host values
    -> execute host operation
    -> convert result to Value
    -> annotate result type when useful

host failure:
  exception/error code
    -> runtime.raise_runtime_error(site, message)`,
        },
        {
          id: "stdlib-maths-texte",
          title: "Maths and Texte",
          body: [
            "`Maths` is a mostly stateless numeric module. It exposes constants such as `pi`, `e`, `infini`, and `non_nombre`, then wraps numeric helpers for absolute value, min/max, rounding, roots, powers, logarithms, trigonometry, angle conversion, and numeric predicates.",
            "`Texte` is split between module functions and text-member behavior. It supports size, trimming, search, replacement, splitting, joining, repetition, case conversion, and conversions from text to numeric or logical values.",
          ],
          bullets: [
            "`Maths` validates numeric domains before calling host math operations, for example roots and logarithms.",
            "`Maths` keeps French names and common aliases where useful, such as `absolu`/`abs`, `arrondir`/`arrondi`, `sin`/`sinus`, `cos`/`cosinus`, and `tan`/`tangente`.",
            "`Texte` supports method-style usage on text values as well as module-level helpers for operations such as joining.",
            "`Texte` conversions fail when the complete string cannot be converted to the requested value type.",
          ],
          refs: [
            { term: "Maths", description: "Stateless wrappers around numeric operations, with runtime validation before host math is called." },
            { term: "Texte member access", description: "Text values can expose behavior through member calls, so `texte.elaguer()` can be treated like ordinary Lumière member access." },
            { term: "Unicode boundary", description: "Text operations that count or index visible characters should use Unicode-aware helpers instead of raw byte positions." },
            { term: "Conversion boundary", description: "Text-to-number and text-to-boolean helpers return typed Lumière values or fail with a runtime error." },
          ],
          code: `Maths:
  module constants:
    pi, e, infini, non_nombre
  native function pattern:
    expect number(s)
    validate domain
    call host math
    return Entier or Décimal

Texte:
  module functions:
    joindre(...)
  member resolver:
    receiver: Texte
    member: "taille" | "elaguer" | "separer" | ...
    args -> validate -> return Texte/List/Entier/Logique`,
        },
        {
          id: "stdlib-chemin-fichier",
          title: "Chemin and Fichier",
          body: [
            "`Chemin` is lexical path handling. It builds and normalizes path strings, exposes the platform separator, and extracts names, extensions, parent directories, absolute paths, and path parts. It does not read or mutate the filesystem.",
            "`Fichier` is host filesystem access. It checks existence and entry type, reads and writes text or lines, creates directories, lists directories, copies, moves, removes files, removes empty folders, and can remove directory trees.",
          ],
          bullets: [
            "Keep path construction in `Chemin`; keep filesystem effects in `Fichier`.",
            "`Fichier` converts host filesystem errors into Lumière runtime errors with the failing operation in the message.",
            "Read helpers return Lumière text or lists. Write helpers accept Lumière text or lists and convert them before touching the host filesystem.",
            "Recursive operations should remain explicit because they can affect many host files.",
          ],
          refs: [
            { term: "Chemin", description: "Pure path manipulation. It can be tested without relying on files being present." },
            { term: "Fichier", description: "Effectful host access. Every operation can fail because of permissions, missing paths, encoding, or operating-system behavior." },
            { term: "Separation", description: "Path planning and filesystem mutation stay separate so programs can validate paths before performing effects." },
            { term: "Error translation", description: "Host filesystem errors are converted into Lumière runtime errors with operation-specific messages." },
          ],
          code: `Chemin operation:
  Texte/List input
    -> host path manipulation
    -> Texte/List output
    -> no filesystem mutation

Fichier operation:
  path Texte
    -> validate expected file/directory state when needed
    -> perform host filesystem operation
    -> return Logique | Texte | Liste[Texte] | rien
    -> translate filesystem failure to runtime error`,
        },
        {
          id: "stdlib-temps-aleatoire",
          title: "Temps and Aléatoire",
          body: [
            "`Temps` models time with runtime objects. Instants store millisecond timestamps and expose date/time accessors, formatting, timestamp conversion, addition, and subtraction. Durations store millisecond amounts and expose unit conversions.",
            "`Aléatoire` wraps random generation behind a module-level generator. It exposes seeding, integer ranges, decimal ranges, random choice, in-place shuffling, and sampling without replacement.",
          ],
          bullets: [
            "`Temps` separates points in time from amounts of time so APIs can distinguish `Instant` from `Durée`.",
            "`Temps` formatting uses explicit tokens such as `AAAA`, `MM`, `JJ`, `HH`, `mm`, `ss`, and `SSS`.",
            "`Aléatoire.graine` makes examples and tests repeatable.",
            "`Aléatoire.échantillon` validates that the requested sample size fits the input list.",
          ],
          refs: [
            { term: "Instant", description: "Runtime object for a point in time, backed by a millisecond timestamp and exposed through date/time methods." },
            { term: "Durée", description: "Runtime object for an amount of time, backed by milliseconds and exposed through unit conversion methods." },
            { term: "Formatting", description: "Uses explicit tokens rather than locale guessing, keeping output deterministic." },
            { term: "Random state", description: "The module-level generator supports deterministic seeding for tests and examples." },
          ],
          code: `Instant object:
  __type: "Instant"
  __millis: Entier
  methods:
    année(), mois(), jour(), heure()
    formater(format)
    ajouter(Durée), soustraire(...)

Durée object:
  __type: "Durée"
  __millis: Entier
  methods:
    en_millisecondes()
    en_secondes()
    en_minutes()
    en_heures()

Aléatoire:
  module generator state
  graine(n) resets deterministic sequence`,
        },
        {
          id: "luminet-module",
          title: "LumiNet module layout",
          body: [
            "`LumiNet` is registered as a standard-library module, but its public surface is a set of capability objects instead of one flat list of functions. The exported members are `Adresse`, `DNS`, `TCP`, `UDP`, `HTTP`, and `Canal`.",
            "Each capability is a hidden typed runtime object. Methods are stored as runtime function values on that object. Stateful values, such as connections and servers, attach native state behind the Lumière object while exposing only Lumière fields and methods to user code.",
            "When networking is not enabled for a build, the module exposes an `indisponible` function that raises a Lumière runtime error. That keeps unsupported networking explicit at runtime instead of failing during import with an unrelated host error.",
          ],
          refs: [
            { term: "`Adresse`", description: "Address parsing, host/port values, IPv4/IPv6 checks, local-address checks, and local host discovery." },
            { term: "`DNS`", description: "Forward resolution, all-address resolution with duplicate filtering, and reverse resolution." },
            { term: "`TCP`", description: "Client connections and blocking TCP servers that call Lumière callbacks for accepted clients." },
            { term: "`UDP`", description: "Bound datagram sockets with send, receive, byte packet, broadcast, close, and timeout operations." },
            { term: "`HTTP`", description: "Plain HTTP client requests plus an HTTP server with middleware, route handlers, response writer objects, and Canal upgrade routes." },
            { term: "`Canal`", description: "WebSocket-style client/server channels with event callbacks and frame-based message flow." },
          ],
          code: `LumiNet module:
  public HTTP    -> object "LumiNet.HTTP"
  public Canal   -> object "LumiNet.Canal"
  public TCP     -> object "LumiNet.TCP"
  public UDP     -> object "LumiNet.UDP"
  public DNS     -> object "LumiNet.DNS"
  public Adresse -> object "LumiNet.Adresse"

capability object:
  fields[method_name] = native Lumière function
  fields["__type"] = hidden type marker`,
        },
        {
          id: "luminet-native-state",
          title: "LumiNet native state model",
          body: [
            "Every long-lived network value is represented as a Lumière object with a hidden type marker and attached native state. The visible object contains ordinary fields such as `adresse`, `port`, `statut`, `corps`, or callable methods. The native state holds socket handles, stopped/closed flags, callback values, route lists, pending bytes, or response headers.",
            "This design keeps the public object small while still allowing the host side to manage resources. Closing a connection or stopping a server updates the native state and closes the socket handle. Destructors also close handles so abandoned objects do not leave sockets open.",
          ],
          refs: [
            { term: "Connection state", description: "TCP connections track a socket handle and a closed flag." },
            { term: "Server state", description: "TCP and HTTP servers track a listening socket, a stopped flag, and registered callbacks/routes." },
            { term: "UDP state", description: "UDP sockets track the bound socket, bound port, and closed flag." },
            { term: "Canal state", description: "Channel clients track socket handle, close/open state, pending frame bytes, side of the connection, peer address, and event callbacks." },
            { term: "Response writer state", description: "HTTP response writers track the client socket, whether a response was already sent, and pending headers." },
          ],
          code: `hidden network object:
  fields:
    "__type": Texte
    public data fields
    public method functions
  native_state:
    shared host state pointer

TcpConnectionState:
  fd: socket handle
  closed: Logique

HttpServerState:
  fd: listen socket
  stopped: Logique
  middleware: Function[]
  routes: { method, pattern, handler }[]
  canal_routes: { pattern, handler }[]`,
          note: "The important boundary is: native state never becomes a user-visible value. User code sees Lumière objects and functions.",
        },
        {
          id: "luminet-address-dns",
          title: "LumiNet Adresse and DNS",
          body: [
            "`Adresse` handles validation and construction of host/port values. `analyser` parses `host:port` text and returns a typed address object. Predicate methods check IPv4, IPv6, general validity, and local/private host text. `locale` asks the host for a local address and falls back to loopback when resolution cannot produce a usable address.",
            "`DNS` uses host resolver calls directly. `résoudre` returns the first usable address. `résoudre_tous` returns a `Liste[Texte]` and filters duplicates. `résoudre_inverse` validates that input is IPv4 or IPv6 before asking the host for a reverse lookup.",
          ],
          bullets: [
            "Address objects expose `hôte`, `port`, and `en_texte` instead of exposing host resolver structs.",
            "DNS failures are converted into Lumière runtime errors with the failing operation name.",
            "The API separates syntactic address validation from DNS resolution. `Adresse.est_valide` does not require network access.",
          ],
          code: `Adresse.analyser("localhost:8080"):
  parse host + port
  validate port
  return object {
    __type: "Adresse"
    hôte: "localhost"
    port: 8080
    en_texte(): "localhost:8080"
  }

DNS.résoudre_tous(host):
  getaddrinfo(host)
  for each result:
    convert sockaddr -> text
    skip duplicates
  return Liste[Texte]`,
        },
        {
          id: "luminet-tcp-udp",
          title: "LumiNet TCP and UDP",
          body: [
            "`TCP.connecter` resolves the host and tries candidate addresses until a socket connects. It optionally accepts a `délai` duration, applies that timeout to the socket, then returns a `ConnexionTCP` object.",
            "`ConnexionTCP` exposes connection metadata plus `est_connecté`, `fermer`, `définir_délai`, `écrire`, `écrire_octets`, `lire`, `lire_ligne`, and `lire_octets`. Text writes send UTF-8 bytes. Byte writes and reads convert between Lumière `Liste[Entier]` values and host byte buffers.",
            "`TCP.Serveur` returns a server object. A user registers `quand_connexion`, then calls `écouter`. The listen loop accepts clients, wraps each accepted socket as a `ConnexionTCP`, and calls the Lumière callback with that object. `arrêter` flips the stopped flag, shuts down the listening socket, and breaks the accept loop.",
            "`UDP.ouvrir` binds a datagram socket to a requested port or port `0` for an ephemeral port. The returned `SocketUDP` supports text and byte datagrams, broadcast, receive operations, timeout configuration, and close.",
          ],
          refs: [
            { term: "TCP client lifetime", description: "The connection object owns a native socket handle until `fermer`, remote closure, error, or object destruction." },
            { term: "TCP server lifetime", description: "The server object owns the listening socket and accepted clients are wrapped as separate connection objects." },
            { term: "UDP packet objects", description: "Receive operations return objects containing sender address, sender port, and either text data or a byte list." },
            { term: "Timeouts", description: "Timeouts are accepted as `Durée` objects and translated to socket receive/send options." },
          ],
          code: `TCP.connecter(host, port, délai?):
  resolve host
  for candidate address:
    open socket
    apply timeout if provided
    connect
    if success -> ConnexionTCP(state)
  if none connected -> runtime network error

ServeurTCP.écouter(host, port):
  bind + listen
  while not stopped:
    accept client socket
    wrap as ConnexionTCP
    runtime.call(on_connection, client)

SocketUDP.recevoir():
  recvfrom
  return { données, adresse, port }`,
        },
        {
          id: "luminet-http",
          title: "LumiNet HTTP",
          body: [
            "The HTTP client supports plain `http` URLs. Request helpers parse the URL, resolve the host, open a TCP socket, apply an optional timeout, write an HTTP/1.1 request, read the full response, parse status and headers, then return a `RéponseHTTP` object.",
            "`RéponseHTTP` contains `statut`, `corps`, `succès`, `entête(nom)`, and `entêtes()`. Headers are preserved as pairs and converted to a Lumière dictionary only when user code asks for all headers.",
            "`HTTP.Serveur` creates a `ServeurHTTP` object with route state. It stores middleware callbacks, method-specific routes, and Canal upgrade routes. `écouter` binds a socket, accepts clients, parses each HTTP request, builds `RequêteHTTP` and `RéponseServeurHTTP` objects, then runs middleware before the matched route.",
            "The response writer enforces single response sending. It validates header names and values, prevents user code from overriding `Content-Length` and `Connection`, fills default content type and length when needed, and closes the connection after the response.",
          ],
          refs: [
            { term: "Client methods", description: "`requête`, `obtenir`, `créer`, `modifier`, and `supprimer` share one request builder." },
            { term: "Named arguments", description: "HTTP requests accept `entêtes`/`entetes`, `corps`, `type`, and `délai`/`delai`." },
            { term: "Request object", description: "`RequêteHTTP` exposes method, path, body, route parameters, query parameters, one-header lookup, and all headers." },
            { term: "Response writer", description: "`RéponseServeurHTTP` exposes `définir_entête`, `envoyer`, `envoyer_json`, `envoyer_fichier`, and `rediriger`." },
          ],
          code: `HTTP client:
  parse URL
  resolve host
  connect TCP
  write HTTP/1.1 request
  read until response complete
  parse status line + headers
  return RéponseHTTP {
    statut, corps, succès
    entête(name)
    entêtes()
  }

HTTP server request:
  accept socket
  parse raw request
  match middleware chain
  match route by method + pattern
  build RequêteHTTP + RéponseServeurHTTP
  call handler(request, response)
  enforce one response per socket`,
        },
        {
          id: "luminet-canal",
          title: "LumiNet Canal",
          body: [
            "`Canal` is the WebSocket-style layer. The client path parses an HTTP URL, opens a TCP socket, sends an upgrade request, validates the `101 Switching Protocols` response, verifies the accept key, then returns a Canal client object.",
            "The server path integrates with `HTTP.Serveur`. A Canal route registers a path pattern and callback. During HTTP handling, a matching Canal route verifies the upgrade headers, sends the WebSocket handshake response, wraps the client socket as a Canal client object, calls the registered Lumière callback, then enters the Canal frame loop.",
            "Canal clients expose callback registration methods such as `quand_ouvert`, `quand_message`, `quand_fermé`, and `quand_erreur`, plus `envoyer`, `envoyer_octets`, `fermer`, `est_connecté`, and `attendre`. The loop reads frames, buffers pending bytes, converts text and byte payloads to Lumière values, and calls registered callbacks through the runtime.",
          ],
          bullets: [
            "The handshake uses the WebSocket accept-key algorithm built from SHA-1 and Base64.",
            "Client objects track pending bytes because an HTTP upgrade response can include bytes beyond the header block.",
            "Server routes share the same path-pattern matching mechanism as HTTP routes.",
            "Callbacks are stored as Lumière function values inside native state, then invoked with runtime arguments when frames or lifecycle events occur.",
          ],
          code: `Canal client connect:
  parse URL
  connect TCP
  send HTTP Upgrade request
  read response headers
  require status 101
  verify Upgrade + Connection + Sec-WebSocket-Accept
  return CanalClient(state)

Canal server route:
  HTTP route matches path
  validate Upgrade request
  send Switching Protocols response
  wrap socket as CanalClient
  runtime.call(route_callback, canal_client)
  run frame loop

frame loop:
  read frame
  decode text or bytes
  call on_message callback
  close/error callbacks update state`,
        },
        {
          id: "stdlib-lumitest",
          title: "LumiTest",
          body: [
            "`LumiTest` is implemented as a stateful standard-library module because tests need shared run state: selected filter, verbosity, stop-on-failure behavior, group stack, hooks, collected results, and failure counts.",
            "The module exposes test declaration, grouping, hooks, and assertions as public functions. Assertions throw controlled test failures, and the runner records those failures as test results instead of treating every failed assertion as an unstructured crash.",
          ],
          refs: [
            { term: "Structure", description: "`test`, `groupe`, `avant_tout`, `avant_chaque`, `après_chaque`, and `après_tout`." },
            { term: "Assertions", description: "`vérifier`, `vérifier_égal`, `vérifier_différent`, `vérifier_lance`, `vérifier_contient`, and `vérifier_approx`." },
            { term: "State", description: "Groups, hooks, options, summaries, and abort state live in module state for the duration of a test run." },
            { term: "Controlled failure", description: "Assertion failures are captured as test results so the runner can continue unless stop-on-failure is enabled." },
            { term: "Hooks", description: "Before/after hooks are stored with group context so setup and cleanup run at the correct test boundaries." },
          ],
          code: `LumiTestModuleState:
  options:
    verbose
    stop_on_failure
    filter
  summary:
    results[]
    executed
    failed
  group_stack: string[]
  group_contexts:
    name, full_name
    before_all_hooks[]
    before_each_hooks[]
    after_each_hooks[]
    after_all_hooks[]
    before_all_ran
    has_executed_test
  abort_requested

test execution:
  register group/test
  run before hooks
  execute Lumière callback
  convert assertion failure -> test result
  run after hooks
  update summary`,
        },
        {
          id: "maintainer-checklist",
          title: "Maintainer checklist",
          body: [
            "A change is complete only when the affected layers agree. Syntax, diagnostics, execution behavior, VM lowering, standard-library surface, tests, and documentation should not be updated independently when the behavior crosses those boundaries.",
          ],
          bullets: [
            "New syntax: define tokens, AST shape, parser diagnostics, tree-walk behavior, VM behavior if supported, tests, and docs.",
            "New runtime value: define display, equality, type checks, collection behavior, native function handling, and backend behavior.",
            "New standard-library API: define public name, argument validation, return values, error messages, side effects, tests, and examples.",
            "New command behavior: define terminal output, exit status, JSON shape if applicable, diagnostics, and tests.",
            "VM work: compare supported behavior against tree-walk execution and document any alpha limitation.",
          ],
        },
      ],
    },
    download: {
      title: "Install and build guide",
      intro: "Choose a release artifact when your platform is supported. Build from source when no artifact matches your operating system or processor.",
      sections: [
        {
          id: "choose-artifact",
          title: "Choose the artifact that matches your machine",
          body: [
            "Before downloading, check your operating system and processor architecture. The artifact name matters: an x86-64 package will not install correctly on an ARM system.",
          ],
          bullets: [
            "Linux x86-64 uses the linux-x86_64 release asset.",
            "macOS Intel uses the macos-x86_64 package.",
            "macOS Apple Silicon uses the macos-arm64 package.",
            "Windows x86-64 uses the windows-x86_64 MSI.",
            "Raspberry Pi and other ARM Linux systems should build from source.",
          ],
          code: `uname -s
uname -m`,
        },
        {
          id: "installer-script",
          title: "Install on macOS or Linux with the installer script",
          body: [
            "The installer script detects supported operating systems and architectures. It installs the lumiere executable into ~/.local/bin by default.",
            "If your shell cannot find lumiere after installation, add ~/.local/bin to PATH and open a new terminal.",
          ],
          code: `curl -fsSL https://raw.githubusercontent.com/SY-Technologies/lumiere/main/scripts/install.sh | sh

export PATH="$HOME/.local/bin:$PATH"
lumiere --version`,
        },
        {
          id: "windows",
          title: "Install on Windows",
          body: [
            "The MSI targets x86-64 Windows and adds the installation directory to the system PATH. Open a new terminal after installing.",
            "The PowerShell installer is per-user. It verifies the executable directly and prints the installation directory, but it does not currently modify PATH.",
          ],
          code: `lumiere --version

irm https://raw.githubusercontent.com/SY-Technologies/lumiere/main/scripts/install.ps1 | iex`,
        },
        {
          id: "source-build",
          title: "Build from source",
          body: [
            "Source builds are the supported fallback for platforms without release artifacts. The build creates a native executable for the machine performing the build.",
            "You need Git, CMake 3.23 or newer, and a C++20 compiler.",
          ],
          code: `git clone https://github.com/SY-Technologies/lumiere.git
cd lumiere
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release -DBUILD_TESTING=ON
cmake --build build --parallel 2
ctest --test-dir build --output-on-failure
sudo cmake --install build
lumiere --version`,
          note: "Use cmake --build build --parallel 1 on Raspberry Pi and other memory-constrained machines.",
        },
        {
          id: "source-build-dependencies",
          title: "Install source-build dependencies",
          body: [
            "Linux source builds need Git, CMake, a C++20 compiler, and normal build tools. macOS source builds need Apple’s command-line tools and CMake.",
            "Raspberry Pi and other small machines should build with one parallel job. Release optimization can use enough memory that extra compiler processes slow the build down rather than speeding it up.",
          ],
          code: `sudo apt update
sudo apt install -y build-essential cmake git

xcode-select --install
brew install cmake

cmake --build build --parallel 1`,
          note: "The default CMake install usually places the executable at /usr/local/bin/lumiere.",
        },
        {
          id: "install-specific-release",
          title: "Install or rebuild a specific release",
          body: [
            "Use the latest release for normal installation. Pin a version when you need a reproducible setup or when documentation/examples are tied to a specific release.",
            "When building from source, fetch tags first, check out the release tag, then rebuild and rerun the tests before installing.",
          ],
          code: `curl -fsSL https://raw.githubusercontent.com/SY-Technologies/lumiere/main/scripts/install.sh |
  sh -s -- --version vVERSION

git fetch --tags
git checkout vVERSION
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release -DBUILD_TESTING=ON
cmake --build build --parallel 2
ctest --test-dir build --output-on-failure
sudo cmake --install build`,
        },
        {
          id: "smoke-test",
          title: "Verify the installation",
          body: [
            "After installation, create a small program and run it with the normal command. If the program prints the expected text, the executable is available and working.",
          ],
          code: `fonction principal() {
    afficher("Bonjour depuis Lumiere")
}

lumiere bonjour.lum
lumiere --version`,
        },
        {
          id: "upgrade",
          title: "Upgrade using the same installation path",
          body: [
            "Use the same method that installed the current executable. Upgrades replace the Lumière binary; they do not modify your source files or projects.",
            "If the old version still appears after upgrading, the machine may have multiple lumiere executables on PATH.",
          ],
          code: `command -v lumiere
lumiere --version
which -a lumiere`,
        },
        {
          id: "installation-troubleshooting",
          title: "Troubleshoot installation failures",
          body: [
            "Most installation failures come from an artifact/architecture mismatch, a PATH issue, or missing source-build tools.",
            "When reporting an installation problem, include the operating system, processor architecture, selected artifact, command, and complete error output. Without those details, the failure is usually not reproducible.",
          ],
          refs: [
            { term: "Linux architecture", description: "Run uname -m. x86_64 can use linux-x86_64 artifacts. aarch64 or arm64 should build from source." },
            { term: "Debian package architecture", description: "Run dpkg --print-architecture. The published DEB requires amd64." },
            { term: "macOS architecture", description: "Use macos-x86_64 for Intel and macos-arm64 for Apple Silicon." },
            { term: "Windows architecture", description: "The MSI targets x86-64 Windows. Open a new terminal after installation so PATH changes are visible." },
            { term: "PowerShell installer", description: "It verifies the executable and prints its installation directory, but it does not currently modify PATH." },
            { term: "Multiple installations", description: "Use command -v lumiere and which -a lumiere to see which executable your shell is running." },
          ],
        },
      ],
    },
  },
  fr: {
    learn: {
      title: "Apprendre Lumière depuis zéro",
      intro: "Commencez ici si vous n’avez jamais écrit de code. Ce guide explique les outils, les mots et les idées avant de vous demander de mémoriser la syntaxe de Lumière.",
      sections: [
        {
          id: "installation-outils",
          title: "Préparer vos outils",
          body: [
            "Vous avez besoin de trois choses pour écrire du Lumière : un éditeur pour écrire les fichiers, le programme en ligne de commande Lumière pour les exécuter, et un terminal pour taper les commandes.",
            "Utilisez Visual Studio Code comme éditeur. S’il n’est pas déjà installé, téléchargez VS Code depuis Microsoft, installez-le, puis ouvrez-le.",
            "Dans VS Code, ouvrez la vue Extensions, cherchez l’extension Lumière, puis installez-la. L’extension aide VS Code à reconnaître les fichiers `.lum`, ce qui rend le code Lumière plus facile à lire pendant que vous tapez.",
          ],
          bullets: [
            "Créez un dossier pour vos fichiers d’apprentissage, par exemple `apprendre-lumiere`.",
            "Ouvrez ce dossier dans VS Code.",
            "Créez un fichier nommé bonjour.lum dans ce dossier.",
            "Ouvrez le terminal de VS Code depuis le menu Terminal. Un terminal est l’endroit où vous tapez des commandes et lisez leur résultat.",
            "Installez Lumière depuis la page de téléchargement, puis vérifiez que la commande fonctionne avec `lumiere --version`.",
          ],
          code: `lumiere --version`,
          note: "Avant de continuer, vérifiez que le terminal affiche un numéro de version. S’il dit qu’il ne trouve pas lumiere, fermez le terminal, ouvrez-en un nouveau, puis réessayez. Si le problème continue, revenez au guide d’installation et vérifiez les instructions PATH pour votre plateforme.",
        },
        {
          id: "premier-programme",
          title: "Votre premier programme",
          body: [
            "Un programme est un fichier d’instructions. Chaque instruction demande à l’ordinateur de faire une petite chose.",
            "Tapez ce code dans bonjour.lum. Ne cherchez pas encore à comprendre chaque symbole. Le but est de faire exécuter une instruction visible par Lumière.",
          ],
          code: `fonction principal() {
    afficher("Bonjour, monde!")
}`,
          examples: [
            {
              title: "Afficher deux lignes",
              body: "`principal` peut contenir plusieurs instructions. Lumière les exécute de haut en bas, donc la sortie du terminal suit l’ordre des lignes dans le fichier.",
              code: `fonction principal() {
    afficher("Bonjour")
    afficher("Bienvenue dans Lumière")
}`,
            },
            {
              title: "Changer seulement le texte",
              body: "Les guillemets font partie de la syntaxe. Les mots entre les guillemets sont vos données. Changez les mots, mais gardez le guillemet ouvrant et le guillemet fermant.",
              code: `fonction principal() {
    afficher("Je viens d'écrire mon premier programme.")
}`,
            },
          ],
          note: "Enregistrez le fichier, puis lancez-le avec `lumiere bonjour.lum` dans le terminal. Vous devriez voir `Bonjour, monde!`. Si c’est le cas, changez le texte entre guillemets, enregistrez, puis relancez la commande.",
        },
        {
          id: "lire-le-programme",
          title: "Comment lire ce programme",
          body: [
            "Lisez le programme de l’extérieur vers l’intérieur. La première ligne crée un endroit nommé où des instructions peuvent vivre. La ligne dans les accolades est l’instruction qui affiche réellement le texte.",
            "Les accolades marquent le début et la fin d’un groupe. Tout ce qui se trouve entre `{` et `}` va ensemble.",
          ],
          refs: [
            { term: "`fonction`", description: "Commence un groupe réutilisable d’instructions." },
            { term: "`principal`", description: "Le nom que Lumière cherche lorsqu’il démarre un fichier programme." },
            { term: "`{ ... }`", description: "Garde des instructions liées dans le même groupe." },
            { term: "afficher(...)", description: "Montre une valeur dans le terminal." },
            { term: "`\"Bonjour, monde!\"`", description: "Une valeur texte. Le texte s’écrit entre guillemets." },
          ],
          note: "Une bonne habitude consiste à pointer chaque symbole et à dire son rôle. Si vous ne pouvez pas encore expliquer un symbole, laissez-le en place et revenez-y après les sections suivantes.",
        },
        {
          id: "valeurs",
          title: "Les programmes travaillent avec des valeurs",
          body: [
            "Une valeur est une information que le programme peut utiliser. Une valeur peut être un nombre, du texte ou une réponse comme oui/non.",
            "Afficher des valeurs est la manière la plus simple de vérifier ce que fait votre programme. Changez une ligne, relancez le fichier, puis regardez le résultat dans le terminal.",
          ],
          code: `fonction principal() {
    afficher(42)
    afficher(3.14)
    afficher("Lumière")
    afficher(vrai)
}`,
          examples: [
            {
              title: "Utiliser des valeurs directement",
              body: "Une valeur peut être écrite directement à l’endroit où elle est nécessaire. C’est pratique au début, car chaque ligne produit un résultat visible.",
              code: `fonction principal() {
    afficher("Nom")
    afficher(2026)
    afficher(faux)
}`,
            },
            {
              title: "Combiner du texte et un nombre",
              body: "Quand vous mettez du texte et un nombre ensemble avec `+`, Lumière construit une seule sortie texte. Cela permet d’étiqueter ce que vous affichez.",
              code: `fonction principal() {
    afficher("score=" + 10)
    afficher("niveau=" + 2)
}`,
            },
          ],
          note: "Lancez ce programme une fois, puis ajoutez `afficher(faux)` et relancez-le. 42 est un Entier, 3.14 est un Décimal, le texte est Texte, et `vrai`/`faux` sont des valeurs Logique.",
        },
        {
          id: "variables-pour-memoriser",
          title: "Les variables donnent un nom aux valeurs",
          body: [
            "Une variable est un nom attaché à une valeur. Elle permet de garder une information une fois et de la réutiliser plus tard.",
            "Dans Lumière, `soit` crée une variable. Le nom de la variable se place à gauche. La valeur gardée se place à droite.",
          ],
          code: `fonction principal() {
    soit nom = "Ada"
    soit age = 36

    afficher(nom)
    afficher(age)
}`,
          examples: [
            {
              title: "Nommer une valeur une fois, la réutiliser plusieurs fois",
              body: "La valeur gardée dans `nom` ne disparaît pas après le premier `afficher`. Vous pouvez utiliser la même variable partout après sa création.",
              code: `fonction principal() {
    soit nom = "Ada"

    afficher(nom)
    afficher("Bonjour " + nom)
    afficher(nom + " apprend Lumière")
}`,
            },
            {
              title: "Mettre une variable à jour",
              body: "Une variable peut recevoir une nouvelle valeur plus tard. Lisez ceci ainsi : le score commence à 0, devient 10, puis devient 15.",
              code: `fonction principal() {
    soit score = 0
    afficher(score)

    score = 10
    afficher(score)

    score = score + 5
    afficher(score)
}`,
            },
          ],
          note: "Remplacez `nom` par votre propre nom et `age` par un autre nombre. Ajoutez ensuite `afficher(\"Nom : \" + nom)`. Choisissez des noms qui décrivent le sens de la valeur ; `nom` est plus clair que `x`.",
        },
        {
          id: "calculs",
          title: "Les calculs produisent de nouvelles valeurs",
          body: [
            "Un calcul prend des valeurs existantes et produit une autre valeur. Les programmes utilisent des calculs pour les nombres, le texte, les décisions et beaucoup d’autres tâches.",
            "Ici, Lumière multiplie le prix par la quantité, garde le résultat dans `total`, puis l’affiche.",
          ],
          code: `fonction principal() {
    soit prix = 20
    soit quantite = 3
    soit total = prix * quantite

    afficher("total=" + total)
}`,
          examples: [
            {
              title: "Construire un petit reçu",
              body: "Cet exemple rend chaque étape visible. Le sous-total est calculé d’abord, puis la taxe, puis le total final. Nommer chaque étape rend le calcul plus facile à vérifier.",
              code: `fonction principal() {
    soit prix = 20
    soit quantite = 3
    soit sous_total = prix * quantite
    soit taxe = sous_total * 0.05
    soit total = sous_total + taxe

    afficher("sous-total=" + sous_total)
    afficher("taxe=" + taxe)
    afficher("total=" + total)
}`,
            },
            {
              title: "Calculer une moyenne",
              body: "Une moyenne est un total divisé par un nombre d’éléments. Écrivez le programme dans le même ordre que l’explication orale.",
              code: `fonction principal() {
    soit premiere_note = 12
    soit deuxieme_note = 16
    soit troisieme_note = 14

    soit total = premiere_note + deuxieme_note + troisieme_note
    soit moyenne = total / 3

    afficher("moyenne=" + moyenne)
}`,
            },
          ],
          note: "Transformez cet exemple en petit calculateur : ajoutez `taxe`, calculez `total_avec_taxe`, puis affichez les deux totaux. Si le résultat vous surprend, affichez chaque variable seule avant le résultat final.",
        },
        {
          id: "fonctions-actions",
          title: "Les fonctions nomment une action réutilisable",
          body: [
            "Une fonction est un groupe nommé d’instructions. Vous utilisez une fonction quand vous voulez répéter la même action sans recopier les mêmes lignes partout.",
            "Un paramètre est une valeur que la fonction reçoit. Dans `saluer(nom: Texte)`, la fonction reçoit une valeur texte et lui donne le nom temporaire `nom` pendant son exécution.",
          ],
          code: `fonction saluer(nom: Texte) -> Texte {
    retourne "Bonjour, " + nom
}

fonction principal() {
    afficher(saluer("Ada"))
    afficher(saluer("Camille"))
}`,
          examples: [
            {
              title: "Rendre explicite la partie répétée",
              body: "Sans fonction, vous copieriez la même logique de salutation pour chaque personne. Avec une fonction, la règle vit à un seul endroit et l’entrée change.",
              code: `fonction saluer(nom: Texte) -> Texte {
    retourne "Bonjour, " + nom
}

fonction principal() {
    soit premier = saluer("Ada")
    soit deuxieme = saluer("Grace")

    afficher(premier)
    afficher(deuxieme)
}`,
            },
            {
              title: "Utiliser plusieurs paramètres",
              body: "Une fonction peut recevoir plusieurs valeurs. Chaque paramètre a besoin d’un nom et d’un type, et l’appel doit fournir les valeurs nécessaires.",
              code: `fonction presenter(nom: Texte, age: Entier) -> Texte {
    retourne nom + " a " + age + " ans"
}

fonction principal() {
    afficher(presenter("Ada", 36))
    afficher(presenter("Grace", 85))
}`,
            },
          ],
          note: "Lisez `saluer(nom: Texte)` comme : saluer a besoin d’une valeur Texte nommée nom. Ajoutez une deuxième fonction nommée `crier` qui retourne le même nom avec `!` à la fin, puis appelez-la depuis `principal`.",
        },
        {
          id: "valeurs-retournees",
          title: "Retourner signifie donner une réponse",
          body: [
            "Certaines fonctions font seulement une action, comme afficher du texte. D’autres fonctions calculent une réponse. `retourne` est la manière dont une fonction donne sa réponse.",
            "Imaginez une fonction qui retourne une valeur comme une petite question. Si le programme demande `double(5)`, la fonction répond `10`. Cette réponse peut être affichée, gardée dans une variable ou utilisée dans un autre calcul.",
            "Quand une fonction arrive à `retourne`, elle s’arrête et donne la valeur écrite après `retourne`.",
          ],
          code: `fonction double(nombre: Entier) -> Entier {
    retourne nombre * 2
}

fonction principal() {
    soit resultat = double(5)
    afficher(resultat)
    afficher(double(10))
}`,
          examples: [
            {
              title: "Retourner tôt quand la réponse est connue",
              body: "`retourne` arrête aussi la fonction. Ici, un score négatif retourne immédiatement 0, donc la dernière ligne ne s’exécute que pour les scores non négatifs.",
              code: `fonction corriger_score(score: Entier) -> Entier {
    si (score < 0) {
        retourne 0
    }

    retourne score
}

fonction principal() {
    afficher(corriger_score(-3))
    afficher(corriger_score(12))
}`,
            },
            {
              title: "Garder la réponse retournée",
              body: "Une valeur retournée peut être gardée dans une variable. La ligne suivante devient plus lisible, car le calcul a déjà un nom.",
              code: `fonction ajouter_taxe(prix: Décimal) -> Décimal {
    retourne prix * 1.05
}

fonction principal() {
    soit total = ajouter_taxe(20.0)
    afficher("total=" + total)
}`,
            },
          ],
          note: "`-> Entier` signifie que cette fonction promet de retourner un Entier. Essayez de remplacer `retourne nombre * 2` par `retourne \"non\"` et lancez le fichier. L’erreur fait partie de la leçon : Lumière vérifie la promesse.",
        },
        {
          id: "bases-controle-flux",
          title: "Le contrôle de flux est le trajet du programme",
          body: [
            "Un programme n’exécute pas toujours toutes les lignes. Le contrôle de flux désigne le chemin que le programme suit pendant son exécution.",
            "La plupart des programmes débutants utilisent trois trajets : passer à la ligne suivante, choisir entre plusieurs chemins, ou répéter un groupe de lignes.",
          ],
          refs: [
            { term: "ligne suivante", description: "Après une instruction, Lumière exécute normalement l’instruction placée juste en dessous." },
            { term: "`si` / `sinon`", description: "Choisit un chemin quand une condition est vraie, et un autre chemin quand elle est fausse." },
            { term: "`pour chaque`", description: "Répète les mêmes instructions pour chaque valeur d’une liste." },
            { term: "`retourne`", description: "Quitte immédiatement la fonction actuelle et donne une valeur en réponse." },
          ],
          note: "Quand un programme devient confus, tracez-le sur papier. Écrivez la première ligne exécutée, puis la suivante, et barrez les branches qui ne s’exécutent pas.",
        },
        {
          id: "choix",
          title: "Utilisez si lorsque le programme doit choisir",
          body: [
            "Les programmes doivent souvent choisir entre deux chemins. Une condition est une question à laquelle le programme peut répondre par `vrai` ou `faux`.",
            "Utilisez `si` pour le chemin à exécuter quand la réponse est vraie. Utilisez `sinon` pour le chemin à exécuter dans les autres cas. Un seul de ces deux blocs s’exécute.",
          ],
          code: `fonction afficher_statut(age: Entier) {
    si (age >= 18) {
        afficher("majeur")
    } sinon {
        afficher("mineur")
    }
}

fonction principal() {
    afficher_statut(20)
    afficher_statut(12)
}`,
          examples: [
            {
              title: "Choisir un message à partir d’un score",
              body: "La condition est la question entre parenthèses. Si `score >= 10` est vraie, Lumière exécute le premier bloc. Sinon, il exécute le bloc `sinon`.",
              code: `fonction afficher_resultat(score: Entier) {
    si (score >= 10) {
        afficher("réussi")
    } sinon {
        afficher("à reprendre")
    }
}

fonction principal() {
    afficher_resultat(14)
    afficher_resultat(8)
}`,
            },
            {
              title: "Traiter trois plages",
              body: "Vous pouvez mettre un autre `si` dans `sinon` quand il y a plus de deux chemins. Lisez les branches de haut en bas.",
              code: `fonction niveau(points: Entier) -> Texte {
    si (points >= 90) {
        retourne "excellent"
    } sinon si (points >= 60) {
        retourne "correct"
    } sinon {
        retourne "à travailler"
    }
}

fonction principal() {
    afficher(niveau(95))
    afficher(niveau(72))
    afficher(niveau(40))
}`,
            },
          ],
          note: "Remplacez les âges par 18, 17 et 0. Ensuite, remplacez la condition `>= 18` par `> 18` et observez précisément quelle sortie change.",
        },
        {
          id: "boucles",
          title: "Utilisez les boucles pour répéter un travail",
          body: [
            "Une boucle répète des instructions. Utilisez une boucle quand la même action doit être faite pour plusieurs valeurs.",
            "`pour chaque` signifie : prenez chaque valeur d’une liste, l’une après l’autre, puis exécutez les mêmes instructions pour chacune. Dans cet exemple, `note` vaut 10, puis 12, puis 14. Quand la liste est terminée, le programme continue après la boucle.",
          ],
          code: `fonction principal() {
    soit notes = [10, 12, 14]

    pour chaque note dans notes {
        afficher(note)
    }
}`,
          examples: [
            {
              title: "Transformer plusieurs valeurs en un total",
              body: "La boucle répète la même addition pour chaque note. `total` commence à 0, puis grandit chaque fois que la boucle voit une nouvelle valeur.",
              code: `fonction principal() {
    soit notes = [10, 12, 14]
    soit total = 0

    pour chaque note dans notes {
        total = total + note
    }

    afficher("total=" + total)
}`,
            },
            {
              title: "Afficher une liste avec un rang",
              body: "Une boucle peut mettre à jour plusieurs variables. Ici, `rang` indique quel élément est en train d’être affiché.",
              code: `fonction principal() {
    soit noms = ["Ada", "Grace", "Camille"]
    soit rang = 1

    pour chaque nom dans noms {
        afficher(rang + ". " + nom)
        rang = rang + 1
    }
}`,
            },
          ],
          note: "Ajoutez une variable `total` avant la boucle. Dans la boucle, ajoutez chaque `note` à `total`. Après la boucle, affichez `total`. Vous transformez ainsi une répétition d’affichage en répétition de calcul.",
        },
        {
          id: "variables-et-types",
          title: "Ajoutez des types pour rendre les règles plus claires",
          body: [
            "Un type dit quel genre de valeur est autorisé. Entier signifie nombre entier, Texte signifie texte, et Logique signifie vrai-ou-faux.",
            "Les types aident Lumière à trouver les erreurs. Si une fonction attend un nombre mais reçoit du texte, Lumière peut signaler le problème au lieu de continuer avec une mauvaise valeur.",
          ],
          bullets: [
            "Les types scalaires courants incluent Entier, Décimal, Logique, Texte, Rien et Universel.",
            "Les types de collections incluent Liste[T], ListeFixe[T, N], Dictionnaire[K, V] et Ensemble[T].",
            "Décimal accepte des valeurs Entier lorsque c’est approprié.",
            "Les collections placées dans d’autres collections sont vérifiées aussi.",
          ],
          code: `fonction moyenne(notes: Liste[Entier]) -> Décimal {
    soit total: Entier = 0

    pour chaque note dans notes {
        total = total + note
    }

    retourne total / notes.taille()
}`,
          examples: [
            {
              title: "Lire les annotations comme des promesses",
              body: "`nom: Texte` signifie que cette variable doit contenir du texte. `actif: Logique` signifie qu’elle doit contenir `vrai` ou `faux`. L’annotation documente l’intention et permet à Lumière de refuser les mélanges incorrects.",
              code: `fonction principal() {
    soit nom: Texte = "Ada"
    soit age: Entier = 36
    soit actif: Logique = vrai

    afficher(nom)
    afficher(age)
    afficher(actif)
}`,
            },
            {
              title: "Typer la frontière d’une fonction",
              body: "Les paramètres d’une fonction sont une frontière. Si `totaliser` dit recevoir `Liste[Entier]`, les appels doivent fournir une liste de nombres entiers.",
              code: `fonction totaliser(nombres: Liste[Entier]) -> Entier {
    soit total: Entier = 0

    pour chaque nombre dans nombres {
        total = total + nombre
    }

    retourne total
}

fonction principal() {
    afficher(totaliser([1, 2, 3]))
}`,
            },
          ],
          note: "Copiez ce code dans un fichier, puis ajoutez `principal` en dessous et appelez `moyenne([12, 15, 18])`. Ensuite, essayez de passer du texte au lieu de nombres pour voir comment la règle de type protège la fonction.",
        },
        {
          id: "reference-declarations",
          title: "Référence des déclarations",
          body: [
            "Une déclaration introduit un nom dans votre programme : une variable, une fonction, une classe ou une interface. Voici les formes disponibles dans l’alpha actuelle.",
          ],
          refs: [
            { term: "soit nom = valeur", description: "Crée une variable et laisse Lumière trouver son type à partir de la valeur." },
            { term: "soit nom: Type = valeur", description: "Crée une variable et indique le type attendu." },
            { term: "soit fixe nom = valeur", description: "Crée un nom dont la valeur ne devrait pas changer plus tard." },
            { term: "fonction nom(...) { ... }", description: "Crée un groupe nommé d’instructions. Les paramètres de fonction ont besoin de types." },
            { term: "fonction nom(...) -> Type { ... }", description: "Crée une fonction et indique le type de valeur qu’elle renvoie." },
            { term: "classe Nom { ... }", description: "Déclare une classe avec champs et méthodes." },
            { term: "classe Enfant : Parent { ... }", description: "Déclare une classe qui hérite d’une autre classe." },
            { term: "interface Nom { fonction faire() }", description: "Déclare une interface composée de fonctions attendues." },
            { term: "`public`", description: "Permet à un autre fichier d’importer une fonction, classe, interface ou variable de niveau fichier." },
            { term: "`privé`", description: "Marque des champs de classe privés. Les déclarations privées de niveau fichier sont rejetées." },
            { term: "`remplace fonction`", description: "Déclare qu’une méthode redéfinit un comportement hérité." },
          ],
        },
        {
          id: "collections",
          title: "Les collections gardent plusieurs valeurs",
          body: [
            "Une collection est une valeur qui contient plusieurs valeurs plus petites. Utilisez une collection quand un programme doit garder un groupe ensemble : plusieurs noms, plusieurs notes, plusieurs chemins ou plusieurs réglages.",
            "Le premier choix est la forme du groupe. Utilisez une liste quand l’ordre compte. Utilisez un dictionnaire quand chaque valeur doit être retrouvée par une clé comme `nom`, `score` ou `langage`.",
            "Une collection typée ajoute une règle sur ce qui peut entrer dedans. `Liste[Entier]` signifie que chaque élément de la liste doit être un `Entier`. `Dictionnaire[Texte, Entier]` signifie que chaque clé doit être du `Texte` et chaque valeur stockée doit être un `Entier`.",
          ],
          bullets: [
            "Utilisez `Liste` pour un groupe ordonné dont la taille peut changer.",
            "Utilisez `ListeFixe` pour un groupe ordonné dont la taille est fixe.",
            "Utilisez `Dictionnaire` quand une clé doit mener directement à une valeur.",
            "Utilisez `Ensemble` quand l’appartenance compte plus que l’ordre ou les doublons.",
          ],
          code: `fonction principal() {
    soit notes: Liste[Entier] = [10, 12, 14]
    soit total = 0

    pour chaque note dans notes {
        total = total + note
    }

    afficher("total=" + total)
}`,
          examples: [
            {
              title: "Utiliser une liste quand l’ordre compte",
              body: "Une liste garde les valeurs dans l’ordre. L’indice `0` lit le premier élément, l’indice `1` lit le deuxième, et ainsi de suite.",
              code: `fonction principal() {
    soit noms = ["Ada", "Grace", "Camille"]

    afficher(noms[0])
    afficher(noms[1])
    afficher("nombre=" + noms.taille())
}`,
            },
            {
              title: "Utiliser un dictionnaire quand les noms comptent",
              body: "Un dictionnaire garde les valeurs derrière des clés. C’est utile quand vous voulez demander `nom` ou `langage` directement au lieu de retenir un indice.",
              code: `fonction principal() {
    soit projet = {
        "nom": "Lumière",
        "langage": "C++"
    }

    afficher(projet["nom"])
    afficher(projet["langage"])
}`,
            },
            {
              title: "Laisser le type repérer une mauvaise valeur",
              body: "L’annotation de type est une règle pour toute la collection. Si une liste est déclarée comme `Liste[Entier]`, y placer du texte est une erreur que Lumière peut signaler.",
              code: `fonction principal() {
    soit notes: Liste[Entier] = [10, 12, 14]

    notes[0] = 20
    afficher(notes[0])

    // Essayez ensuite cette ligne :
    // notes[1] = "absent"
}`,
            },
          ],
          note: "Ne commencez pas par mémoriser tous les types de collections. Commencez avec `Liste` et `Dictionnaire`. Quand ces deux formes deviennent naturelles, `ListeFixe` et `Ensemble` sont plus faciles à comprendre.",
        },
        {
          id: "controle-de-flux",
          title: "Le contrôle de flux choisit le chemin",
          body: [
            "Le contrôle de flux désigne l’ordre dans lequel un programme s’exécute. La plupart des lignes s’exécutent de haut en bas, mais certaines instructions changent le chemin : une condition choisit un bloc, une boucle répète un bloc, et `retourne` quitte une fonction avec une réponse.",
            "Commencez par des chemins simples avant d’utiliser les formes avancées. Utilisez `si` quand il y a deux ou trois choix. Utilisez `pour chaque` quand la même action doit être faite pour chaque valeur d’une collection. Utilisez `agir selon` quand une valeur possède plusieurs cas nommés.",
          ],
          bullets: [
            "`si` pose une question oui/non et exécute un bloc seulement quand la réponse est `vrai`.",
            "`sinon` donne au programme un chemin de repli quand la condition du `si` est `faux`.",
            "`pour chaque` répète un bloc une fois pour chaque valeur d’une collection.",
            "`retourne` arrête immédiatement la fonction courante et renvoie une valeur à l’appelant.",
          ],
          code: `fonction prix_livraison(total: Décimal) -> Décimal {
    si (total >= 50.0) {
        retourne 0.0
    }

    retourne 7.5
}

fonction principal() {
    afficher(prix_livraison(80.0))
    afficher(prix_livraison(20.0))
}`,
          examples: [
            {
              title: "Choisir entre plusieurs messages",
              body: "Les conditions sont testées de haut en bas. La première condition vraie gagne. Si aucune condition n’est vraie, le bloc final `sinon` s’exécute.",
              code: `fonction message_temperature(degres: Entier) -> Texte {
    si (degres < 0) {
        retourne "gel"
    } sinon si (degres < 20) {
        retourne "frais"
    } sinon {
        retourne "chaud"
    }
}

fonction principal() {
    afficher(message_temperature(-4))
    afficher(message_temperature(12))
    afficher(message_temperature(28))
}`,
            },
            {
              title: "Arrêter la recherche quand la réponse est trouvée",
              body: "`retourne` peut terminer une boucle plus tôt parce que la fonction est finie. Ici, la fonction s’arrête dès qu’elle trouve le nom cherché.",
              code: `fonction contient_nom(noms: Liste[Texte], cherche: Texte) -> Logique {
    pour chaque nom dans noms {
        si (nom == cherche) {
            retourne vrai
        }
    }

    retourne faux
}

fonction principal() {
    afficher(contient_nom(["Ada", "Grace"], "Grace"))
    afficher(contient_nom(["Ada", "Grace"], "Camille"))
}`,
            },
            {
              title: "Utiliser agir selon pour des cas nommés",
              body: "`agir selon` garde plusieurs cas organisés autour d’une seule valeur. Utilisez-le quand le programme ne pose pas seulement une question oui/non, mais décide ce que signifie une valeur précise.",
              code: `fonction etiquette(tags: Liste[Texte]) -> Texte {
    agir selon tags.taille() {
        0 -> {
            retourne "aucun tag"
        }
        1 -> {
            retourne "un tag"
        }
        n: Entier -> {
            retourne "tags=" + n
        }
        sinon -> {
            retourne "?"
        }
    }
}`,
            },
          ],
          note: "Quand le contrôle de flux devient difficile à suivre, écrivez les valeurs et tracez la branche qui s’exécute. Ne devinez pas ; suivez les conditions dans l’ordre.",
        },
        {
          id: "reference-expressions",
          title: "Référence des expressions et opérateurs",
          body: [
            "La surface d’expression reste familière : littéraux, appels, accès membre, indexation, arithmétique, comparaisons, affectation, conversions et tests de type.",
            "Les arguments nommés se lient par nom de paramètre et peuvent apparaître dans n’importe quel ordre. Les arguments nommés inconnus ou dupliqués sont rejetés.",
          ],
          refs: [
            { term: "littéraux", description: "Entiers, décimaux, valeurs logiques, texte, symboles et `rien` sont pris en charge." },
            { term: "`et` / `ou`", description: "Les opérateurs logiques court-circuitent." },
            { term: "`x est Type`", description: "Vérifie si une valeur possède un type donné." },
            { term: "`valeur en Type`", description: "Convertit une valeur vers un autre type lorsque cette conversion est prise en charge." },
            { term: "`objet.membre`", description: "Lit un champ ou une méthode depuis un objet, module ou surface de valeur intégrée." },
            { term: "collection[index]", description: "Lit depuis les valeurs indexées prises en charge, comme listes, listes fixes, dictionnaires et texte." },
            { term: "fonction(a: 1, b: 2)", description: "Les arguments nommés se lient par nom de paramètre plutôt que par position d’appel." },
            { term: "`ici`", description: "Référence le receveur courant dans une méthode." },
            { term: "`parent`", description: "Appelle le comportement parent depuis une méthode de classe." },
          ],
        },
        {
          id: "modules",
          title: "Les modules sont des fichiers .lum ordinaires",
          body: [
            "Un module est un fichier source Lumière. Les membres publics peuvent être importés par d’autres fichiers. Les imports peuvent charger un module, utiliser un alias ou sélectionner des membres exportés.",
            "Utilisez `public` sur les déclarations qu’un autre fichier doit pouvoir importer.",
          ],
          code: `// Salutations.lum
public fonction saluer(nom: Texte) -> Texte {
    retourne "Bonjour, " + nom
}

// programme.lum
importer Salutations.{saluer}

fonction principal() {
    afficher(saluer("Ada"))
}`,
          examples: [
            {
              title: "Garder un helper dans un autre fichier",
              body: "Créez `Calculs.lum` pour les calculs réutilisables, puis importez seulement la fonction publique nécessaire depuis `programme.lum`.",
              code: `// Calculs.lum
public fonction doubler(nombre: Entier) -> Entier {
    retourne nombre * 2
}

// programme.lum
importer Calculs.{doubler}

fonction principal() {
    afficher(doubler(21))
}`,
            },
            {
              title: "Importer un module comme espace de noms",
              body: "Un import d’espace de noms garde le nom du module devant l’appel. C’est utile quand le helper vient d’un module plus large.",
              code: `importer Maths

fonction principal() {
    soit racine = Maths.racine(81)
    afficher(racine)
}`,
            },
          ],
          note: "Cet exemple utilise deux fichiers. Placez-les dans le même dossier, lancez `lumiere programme.lum`, puis retirez `public` de Salutations.lum et relancez. L’échec montre pourquoi les noms exportés doivent être explicites.",
        },
        {
          id: "formes-import",
          title: "Formes d’import",
          body: [
            "Les imports peuvent charger un module comme espace de noms, lui donner un alias ou amener des membres publics sélectionnés dans le fichier courant.",
            "Utilisez les imports sélectifs quand le lecteur doit voir exactement d’où vient une fonction ou un type. Utilisez les alias de module quand plusieurs modules rendraient les noms trop lourds.",
          ],
          refs: [
            { term: "importer Maths", description: "Importe un module intégré ou source et accède aux membres via le nom du module." },
            { term: "importer Chemin comme C", description: "Importe un module avec un alias." },
            { term: "importer Salutations.{saluer}", description: "Importe des membres publics sélectionnés depuis un module que vous avez créé." },
            { term: "importer Salutations.{saluer comme bonjour}", description: "Importe un membre public sélectionné avec un alias local." },
            { term: "public fonction nom(...)", description: "Rend une fonction de niveau fichier importable depuis un autre fichier." },
            { term: "public classe Nom", description: "Rend une classe importable depuis un autre fichier." },
            { term: "public interface Nom", description: "Rend une interface importable depuis un autre fichier." },
          ],
          code: `importer Chemin comme C
importer Maths

fonction principal() {
    soit chemin = C.joindre("donnees", "notes.txt")
    soit racine = Maths.racine(81.0)

    afficher(chemin)
    afficher(racine)
}`,
          note: "Remplacez `C` par un autre alias, par exemple `Paths`, puis mettez à jour l’appel. L’alias n’a rien de magique ; c’est seulement le nom local choisi pour le module.",
        },
        {
          id: "objets",
          title: "Les classes regroupent données et comportement",
          body: [
            "Une classe est un plan pour fabriquer des objets. Utilisez une classe quand plusieurs valeurs vont ensemble et quand vous voulez aussi des fonctions qui travaillent avec ces valeurs.",
            "Les champs sont les valeurs gardées dans l’objet. Les méthodes sont les fonctions attachées à l’objet. Dans une méthode, `ici` désigne l’objet qui reçoit l’appel de méthode.",
            "L’héritage et les interfaces servent surtout dans des programmes plus grands. L’héritage permet à une classe de réutiliser les champs et méthodes d’une autre classe. Une interface décrit les méthodes qu’une classe doit fournir.",
          ],
          bullets: [
            "Créez un objet en appelant le nom de la classe, par exemple `Personne(nom: \"Ada\", age: 36)`.",
            "Lisez un champ avec `objet.champ`, par exemple `p.nom`.",
            "Appelez une méthode avec `objet.methode()`, par exemple `p.saluer()`.",
            "Utilisez `privé` sur un champ quand le code extérieur ne devrait pas le lire directement.",
          ],
          code: `classe Personne {
    nom: Texte
    age: Entier

    fonction saluer() {
        afficher("Bonjour " + ici.nom)
    }
}

fonction principal() {
    soit p = Personne(nom: "Ada", age: 36)

    afficher(p.nom)
    afficher(p.age)
    p.saluer()
}`,
          examples: [
            {
              title: "Mettre des valeurs liées dans un objet",
              body: "Sans classe, `nom` et `age` sont des variables séparées. Avec une classe, elles voyagent ensemble comme une seule valeur `Personne`.",
              code: `classe Personne {
    nom: Texte
    age: Entier
}

fonction principal() {
    soit ada = Personne(nom: "Ada", age: 36)
    soit grace = Personne(nom: "Grace", age: 85)

    afficher(ada.nom)
    afficher(grace.nom)
}`,
            },
            {
              title: "Utiliser ici dans une méthode",
              body: "`ici.nom` signifie le champ `nom` de l’objet qui a reçu l’appel de méthode. La même méthode fonctionne pour deux objets parce que `ici` change selon le receveur.",
              code: `classe Personne {
    nom: Texte

    fonction presentation() -> Texte {
        retourne "Je suis " + ici.nom
    }
}

fonction principal() {
    soit ada = Personne(nom: "Ada")
    soit grace = Personne(nom: "Grace")

    afficher(ada.presentation())
    afficher(grace.presentation())
}`,
            },
            {
              title: "Réutiliser un comportement avec l’héritage",
              body: "`Chien : Animal` signifie qu’un `Chien` possède les champs et méthodes déclarés sur `Animal`. La classe enfant peut ajouter ses propres champs.",
              code: `classe Animal {
    nom: Texte

    fonction decrire() {
        afficher("Animal: " + ici.nom)
    }
}

classe Chien : Animal {
    race: Texte
}

fonction principal() {
    soit c = Chien(nom: "Rex", race: "Berger")
    afficher(c.race)
    c.decrire()
}`,
            },
            {
              title: "Utiliser une interface pour une méthode attendue",
              body: "Une interface est une promesse de comportement. `Rapport réalise Presentable` signifie que `Rapport` doit fournir la méthode demandée par `Presentable`.",
              code: `interface Presentable {
    fonction presenter() -> Texte
}

classe Rapport réalise Presentable {
    titre: Texte

    fonction presenter() -> Texte {
        retourne "rapport: " + ici.titre
    }
}

fonction principal() {
    soit rapport = Rapport(titre: "Alpha")
    afficher(rapport.presenter())
}`,
            },
          ],
          note: "Ne commencez pas chaque programme avec des classes. Commencez avec variables et fonctions. Introduisez une classe quand un groupe de valeurs revient souvent ensemble et que les mêmes opérations appartiennent à ce groupe.",
        },
        {
          id: "shell-et-tests",
          title: "Utilisez le shell et les tests pendant l’apprentissage",
          body: [
            "Lancer lumiere sans argument ouvre un shell interactif. Il conserve les déclarations entre les soumissions et accepte les blocs multilignes.",
            "Les suites LumiTest se lancent en ligne de commande avec lumiere tester. Utilisez le shell pour explorer rapidement et les tests pour répéter un comportement.",
          ],
          code: `lumiere
:aide
:quitter

lumiere tester tests
lumiere tester tests --verbeux
lumiere tester tests --filtre "nom du test"`,
          note: "Utilisez le shell pour des questions d’une ligne comme `1 + 2` ou une petite fonction. Utilisez un fichier `.lum` dès que le code dépasse quelques lignes.",
        },
        {
          id: "tester-avec-lumitest",
          title: "Tester, c’est vérifier un comportement volontairement",
          body: [
            "Un test est un petit programme qui vérifie un autre morceau de code. Au lieu de lancer votre programme, regarder la sortie, puis décider à l’œil si elle est correcte, un test écrit le résultat attendu directement dans le code.",
            "Les tests sont importants parce que les programmes changent. Vous pouvez améliorer une fonction aujourd’hui et casser par accident quelque chose qui fonctionnait hier. Un bon test repère cette casse immédiatement.",
            "Dans Lumière, les tests utilisent le module intégré `LumiTest`. Un test a un nom, du code à exécuter, et une ou plusieurs vérifications comme `vérifier_égal`.",
          ],
          refs: [
            { term: "Préparer", description: "Créer les valeurs dont le test a besoin." },
            { term: "Agir", description: "Appeler la fonction ou lancer l’opération testée." },
            { term: "Vérifier", description: "Comparer le résultat avec `LumiTest.vérifier`, `vérifier_égal` ou une autre assertion." },
            { term: "Échec", description: "Un échec utile indique quel comportement a changé et quel résultat était attendu." },
          ],
          code: `importer LumiTest

fonction additionner(a: Entier, b: Entier) -> Entier {
    retourne a + b
}

LumiTest.test("additionne deux nombres", fonction() {
    soit resultat = additionner(2, 3)

    LumiTest.vérifier_égal(5, resultat)
})`,
          examples: [
            {
              title: "Commencer par le plus petit test utile",
              body: "Ce test vérifie un seul comportement : additionner deux nombres entiers. La fonction pourra être réécrite plus tard, mais le comportement doit rester le même.",
              code: `importer LumiTest

fonction additionner(a: Entier, b: Entier) -> Entier {
    retourne a + b
}

LumiTest.test("2 + 3 donne 5", fonction() {
    LumiTest.vérifier_égal(5, additionner(2, 3))
})`,
            },
            {
              title: "Faire en sorte que l’échec explique quelque chose",
              body: "Lancez ce test une fois tel quel. Ensuite, remplacez `8` par `9` et relancez-le. L’échec montre que le test vérifie réellement le résultat.",
              code: `importer LumiTest

fonction doubler(nombre: Entier) -> Entier {
    retourne nombre * 2
}

LumiTest.test("double 4", fonction() {
    LumiTest.vérifier_égal(8, doubler(4))
})`,
            },
            {
              title: "Tester le comportement, pas l’implémentation",
              body: "Le test ne s’intéresse pas à la manière dont `est_pair` est écrit. Il énonce seulement des exemples qui doivent rester vrais.",
              code: `importer LumiTest

fonction est_pair(nombre: Entier) -> Logique {
    retourne nombre % 2 == 0
}

LumiTest.test("nombres pairs", fonction() {
    LumiTest.vérifier(est_pair(2))
    LumiTest.vérifier(est_pair(10))
    LumiTest.vérifier_égal(faux, est_pair(3))
})`,
            },
            {
              title: "Regrouper les cas liés",
              body: "Un groupe donne un nom commun à plusieurs tests. Utilisez les groupes quand une fonction a plusieurs cas importants : entrée normale, entrée vide ou cas limite.",
              code: `importer LumiTest

fonction saluer(nom: Texte) -> Texte {
    retourne "Bonjour, " + nom
}

LumiTest.groupe("Salutations", fonction() {
    LumiTest.test("nom simple", fonction() {
        LumiTest.vérifier_égal("Bonjour, Ada", saluer("Ada"))
    })

    LumiTest.test("nom vide", fonction() {
        LumiTest.vérifier_égal("Bonjour, ", saluer(""))
    })
})`,
            },
            {
              title: "Vérifier qu’une erreur est volontaire",
              body: "Certaines fonctions doivent refuser les mauvaises entrées. `vérifier_lance` vérifie que le code dans la fonction anonyme lance une erreur.",
              code: `importer LumiTest

fonction diviser(a: Entier, b: Entier) -> Entier {
    si (b == 0) {
        lancer "division par zéro"
    }

    retourne a / b
}

LumiTest.test("refuse la division par zéro", fonction() {
    LumiTest.vérifier_lance(fonction() {
        diviser(10, 0)
    })
})`,
            },
          ],
          note: "Placez les tests dans un dossier `tests` et lancez-les avec `lumiere tester tests`. Écrivez des tests pour les comportements que vous ne voulez pas casser par accident.",
        },
        {
          id: "modules-integres-en-pratique",
          title: "Utiliser les modules intégrés",
          body: [
            "Les modules intégrés s’importent comme les modules source. Utilisez-les pour des tâches ciblées : Maths pour les nombres, Texte pour les aides de texte, Chemin pour les chemins lexicaux, Fichier pour l’état du système de fichiers, Temps pour le temps, Aléatoire pour les valeurs aléatoires, LumiNet pour les programmes réseau et LumiTest pour les tests.",
            "Chemin ne vérifie pas le système de fichiers. Construisez ou normalisez des chaînes de chemin avec Chemin, puis demandez à Fichier si ces chemins existent ou contiennent des données.",
          ],
          code: `importer Chemin
importer Fichier
importer Maths

fonction principal() {
    soit dossier = Chemin.joindre("notes", "alpha")
    soit fichier = Chemin.joindre(dossier, "resultat.txt")

    si (non Fichier.existe(dossier)) {
        Fichier.creer_dossiers(dossier)
    }

    soit score = Maths.arrondir(Maths.racine(81.0))
    Fichier.ecrire_texte(fichier, "score=" + score)

    afficher(Fichier.lire_texte(fichier))
}`,
          note: "Lancez cet exemple depuis un dossier d’exercice vide, puis inspectez le fichier généré `notes/alpha/resultat.txt` dans VS Code. L’objectif est de relier chaque ligne de code au fichier visible qu’elle a créé.",
        },
        {
          id: "module-maths",
          title: "Maths : travailler proprement avec les nombres",
          body: [
            "Utilisez Maths quand un programme a besoin de plus que `+`, `-`, `*` et `/`. Le module fournit des constantes, des helpers d’arrondi, des racines, des puissances, des logarithmes, de la trigonométrie et des questions simples sur les nombres.",
            "L’habitude importante est de choisir le helper qui correspond au sens voulu. `arrondir` donne l’entier le plus proche. `plancher` descend. `plafond` monte. `tronquer` retire la partie décimale.",
            "Les helpers Maths sont de simples appels de fonction. Placez la valeur à calculer entre parenthèses, gardez le résultat dans une variable si vous allez le réutiliser, et affichez de petits résultats intermédiaires pendant l’apprentissage.",
          ],
          bullets: [
            "Utilisez `Entier` pour les comptes entiers : tentatives, âges, indices et quantités.",
            "Utilisez `Décimal` pour les mesures : distance, ratios, moyennes et pourcentages.",
            "Vérifiez les domaines invalides avant d’appeler un helper : ne donnez pas une valeur négative à `racine`, et ne donnez pas zéro comme degré à `racine_n`.",
            "Ne comparez pas les résultats décimaux comme s’ils étaient toujours exacts. Dans les tests, utilisez LumiTest.vérifier_approx.",
          ],
          refs: [
            { term: "Maths.pi / Maths.e", description: "Constantes utiles pour les formules de cercle et les logarithmes naturels." },
            { term: "Maths.absolu(nombre)", description: "Distance à zéro. `Maths.absolu(-7)` retourne `7`." },
            { term: "Maths.min(a, b) / Maths.max(a, b)", description: "Choisit le plus petit ou le plus grand de deux nombres." },
            { term: "Maths.racine(nombre)", description: "Racine carrée. Le nombre ne doit pas être négatif." },
            { term: "Maths.racine_n(nombre, degré)", description: "Racine n-ième. Le degré ne peut pas être zéro ; une racine paire d’un nombre négatif est rejetée." },
            { term: "Maths.puissance(base, exposant)", description: "Élève un nombre à une puissance." },
            { term: "Maths.est_pair / Maths.est_impair", description: "Indique si un entier est pair ou impair." },
          ],
          code: `importer Maths

fonction principal() {
    soit rayon = 5
    soit aire = Maths.pi * Maths.puissance(rayon, 2)

    afficher("aire arrondie=" + Maths.arrondir(aire))
    afficher("racine de 81=" + Maths.racine(81))
    afficher("4 est pair=" + Maths.est_pair(4))
}`,
          examples: [
            {
              title: "Choisir le bon helper d’arrondi",
              body: "Les helpers d’arrondi répondent à des questions différentes. Utilisez `plancher` pour descendre, `plafond` pour monter, et `arrondir` pour obtenir l’entier le plus proche.",
              code: `importer Maths

fonction principal() {
    soit prix = 12.75

    afficher(Maths.plancher(prix))
    afficher(Maths.plafond(prix))
    afficher(Maths.arrondir(prix))
}`,
            },
            {
              title: "Vérifier une valeur avant de calculer",
              body: "`Maths.racine` attend un nombre non négatif. Vérifiez la valeur d’abord quand elle peut venir d’un utilisateur, d’un fichier ou d’un autre calcul.",
              code: `importer Maths

fonction afficher_racine(nombre: Décimal) {
    si (nombre < 0.0) {
        afficher("racine impossible")
        retourne
    }

    afficher(Maths.racine(nombre))
}

fonction principal() {
    afficher_racine(81.0)
    afficher_racine(-4.0)
}`,
            },
          ],
          note: "Remplacez `rayon` par 10 et prédisez la nouvelle aire avant de lancer. Les helpers trigonométriques comme sin, cos et tan utilisent les radians. Convertissez les degrés avec degres_vers_radians avant de les utiliser.",
        },
        {
          id: "module-texte",
          title: "Texte : nettoyer, découper, chercher et convertir",
          body: [
            "Le travail sur du texte commence souvent par quatre questions : le texte est-il vide, contient-il un fragment, comment le découper, ou comment le nettoyer avant usage.",
            "La plupart des helpers Texte existent sous deux formes. Vous pouvez les appeler comme méthodes, par exemple `nom.elaguer()`, ou par le module, par exemple `Texte.elaguer(nom)`. Utilisez la forme méthode quand vous avez déjà la valeur texte sous les yeux.",
            "Un bon schéma débutant est : nettoyer le texte, vérifier qu’il a la forme attendue, le découper, puis convertir seulement les morceaux qui doivent devenir des nombres ou des valeurs `Logique`.",
          ],
          bullets: [
            "Utilisez `elaguer` avant d’analyser une saisie utilisateur pour que les espaces accidentels ne fassent pas partie de la valeur.",
            "Utilisez `index_de` quand la position compte ; utilisez `contient` quand vous voulez seulement une réponse oui/non.",
            "Après `separer`, inspectez la taille de la liste avant de lire des indices si l’entrée peut être mal formée.",
            "`en_logique` accepte `vrai` et `faux` ; ce n’est pas une conversion vague de vérité.",
          ],
          refs: [
            { term: "texte.taille()", description: "Longueur de la représentation texte stockée. Dans l’alpha actuelle, cela suit la longueur de chaîne du runtime, pas un comptage de graphèmes Unicode." },
            { term: "texte.elaguer()", description: "Retire les espaces au début et à la fin. Utilisez elaguer_gauche ou elaguer_droite pour un seul côté." },
            { term: "texte.contient(fragment)", description: "Retourne `vrai` si le fragment apparaît dans le texte." },
            { term: "texte.index_de(fragment)", description: "Retourne la première position, ou `-1` si le fragment est absent." },
            { term: "texte.separer(separateur)", description: "Découpe le texte en liste. Le séparateur ne doit pas être vide." },
            { term: "texte.en_entier() / en_decimal() / en_logique()", description: "Convertit le texte en valeur typée. La conversion échoue si tout le texte n’est pas valide." },
            { term: "Texte.joindre(liste, separateur)", description: "Joint une liste de textes en un seul texte." },
          ],
          code: `importer Texte

fonction principal() {
    soit ligne = "  Ada,Lovelace,36  "
    soit propre = ligne.elaguer()
    soit morceaux = propre.separer(",")

    soit prenom = morceaux[0]
    soit nom = morceaux[1]
    soit age = morceaux[2].en_entier()

    afficher(prenom + " " + nom)
    afficher(age + 1)
    afficher(Texte.joindre([prenom, nom], " "))
}`,
          examples: [
            {
              title: "Nettoyer une entrée avant de l’utiliser",
              body: "Les espaces en trop sont fréquents dans le texte copié ou saisi. Nettoyez d’abord, puis comparez ou convertissez.",
              code: `fonction principal() {
    soit reponse = "  oui  "
    soit propre = reponse.elaguer()

    afficher(propre)
    afficher(propre == "oui")
}`,
            },
            {
              title: "Découper après avoir choisi un séparateur",
              body: "`separer` transforme un texte en liste. Après le découpage, vérifiez la taille de la liste avant de supposer que chaque morceau existe.",
              code: `fonction principal() {
    soit ligne = "Ada;36;Lumière"
    soit morceaux = ligne.separer(";")

    afficher("morceaux=" + morceaux.taille())
    afficher(morceaux[0])
    afficher(morceaux[1].en_entier())
}`,
            },
          ],
          note: "Remplacez `ligne` par `Grace,Hopper,85` sans espaces autour, puis relancez. Ensuite, retirez une virgule et observez pourquoi vérifier `morceaux.taille()` compte avant de lire des indices.",
        },
        {
          id: "module-chemin",
          title: "Chemin : préparer les chemins avant les fichiers",
          body: [
            "Un chemin est du texte qui désigne un fichier ou un dossier possible. Chemin aide à construire et inspecter ce texte sans lire le disque.",
            "Cette différence compte : `Chemin.joindre(\"notes\", \"jour1.txt\")` construit un chemin. Cela ne crée aucun dossier et ne vérifie pas si le fichier existe. Pour cela, utilisez Fichier.",
            "Gardez la construction de chemins au même endroit. Construisez les chemins à partir de morceaux stables au lieu d’écrire les séparateurs à la main ; le programme sera plus facile à modifier si un nom de dossier change.",
          ],
          bullets: [
            "Utilisez `joindre` plutôt que d’écrire `\"dossier/fichier.txt\"` à la main quand un chemin vient de plusieurs morceaux.",
            "Utilisez `nom`, `extension` et `dossier` quand vous devez expliquer ou valider un chemin avant de l’utiliser.",
            "Utilisez `normaliser` pour simplifier les chemins texte qui contiennent `.` ou `..`.",
            "Utilisez `absolu` dans les diagnostics pour montrer le chemin exact visé par le programme.",
          ],
          refs: [
            { term: "Chemin.joindre(...segments)", description: "Joint des segments de chemin et normalise les parties `.` / `..`." },
            { term: "Chemin.nom(chemin)", description: "Retourne le dernier nom de fichier ou de dossier." },
            { term: "Chemin.extension(chemin)", description: "Retourne l’extension avec le point, par exemple `.lum`." },
            { term: "Chemin.dossier(chemin)", description: "Retourne la partie dossier parent." },
            { term: "Chemin.parties(chemin)", description: "Retourne les parties normalisées du chemin comme liste de textes." },
            { term: "Chemin.absolu(chemin)", description: "Transforme un chemin relatif en chemin absolu avec le dossier courant." },
          ],
          code: `importer Chemin

fonction principal() {
    soit source = Chemin.joindre("src", "exemples", "..", "bonjour.lum")

    afficher(source)
    afficher(Chemin.nom(source))
    afficher(Chemin.nom_sans_extension(source))
    afficher(Chemin.extension(source))
    afficher(Chemin.dossier(source))
}`,
          examples: [
            {
              title: "Construire un chemin à partir de morceaux",
              body: "Quand un chemin vient de plusieurs morceaux, utilisez `Chemin.joindre`. Le code indique les morceaux importants sans écrire les séparateurs à la main.",
              code: `importer Chemin

fonction principal() {
    soit dossier = Chemin.joindre("journal", "2026")
    soit fichier = Chemin.joindre(dossier, "juillet.txt")

    afficher(fichier)
    afficher(Chemin.dossier(fichier))
}`,
            },
            {
              title: "Inspecter un chemin avant de l’utiliser",
              body: "Chemin aide à poser des questions sur du texte de chemin. C’est utile avant qu’un programme accepte ou refuse un nom de fichier.",
              code: `importer Chemin

fonction principal() {
    soit fichier = "notes/bonjour.lum"

    afficher(Chemin.nom(fichier))
    afficher(Chemin.nom_sans_extension(fichier))
    afficher(Chemin.extension(fichier))
}`,
            },
          ],
          note: "Ajoutez `afficher(Chemin.absolu(source))` et comparez le chemin relatif avec le chemin absolu. Chemin retourne du texte normalisé ; il ne crée, ne lit et ne supprime rien.",
        },
        {
          id: "module-fichier",
          title: "Fichier : lire, écrire, lister, déplacer et supprimer",
          body: [
            "Fichier est le module qui communique avec le système de fichiers hôte. Il est utile, mais il faut l’utiliser avec attention : les opérations d’écriture peuvent créer des fichiers, remplacer du contenu, déplacer des fichiers ou supprimer des données.",
            "Commencez par un schéma sûr : créer un dossier dédié, écrire dedans, relire ce que vous avez écrit, puis lister ce même dossier. Évitez les helpers de suppression tant que vous n’êtes pas certain du chemin transmis.",
            "Un programme de fichiers devrait généralement séparer trois étapes : préparer le chemin avec Chemin, vérifier l’état actuel avec Fichier.existe ou Fichier.est_dossier, puis effectuer la lecture ou l’écriture.",
          ],
          bullets: [
            "Utilisez `ecrire_texte` quand le fichier doit contenir exactement le nouveau contenu. Le contenu existant est remplacé.",
            "Utilisez `ajouter_texte` pour construire un journal ou ajouter un nouvel enregistrement.",
            "Utilisez `lire_lignes` quand chaque ligne a un sens : une tâche, un nom ou un score par ligne.",
            "Utilisez `lister_recursif` seulement quand vous avez réellement besoin des fichiers imbriqués ; `lister` est plus simple à raisonner.",
            "Traitez `supprimer_arbre` comme une opération dangereuse. Affichez le chemin avant de l’utiliser pendant l’apprentissage.",
          ],
          refs: [
            { term: "Fichier.existe(path)", description: "Indique si un chemin existe actuellement." },
            { term: "Fichier.est_fichier / est_dossier", description: "Indique le type d’entrée présent à ce chemin." },
            { term: "Fichier.lire_texte / lire_lignes", description: "Lit un fichier entier comme texte ou comme liste de lignes." },
            { term: "Fichier.ecrire_texte / ajouter_texte", description: "Crée/remplace du texte, ou ajoute du texte à la fin d’un fichier." },
            { term: "Fichier.ecrire_lignes(path, lignes)", description: "Écrit une liste de textes sous forme de lignes séparées par des retours à la ligne." },
            { term: "Fichier.lister / lister_recursif", description: "Retourne les chemins triés dans un dossier, avec ou sans récursion." },
            { term: "Fichier.copier / deplacer / supprimer", description: "Copie, renomme/déplace ou supprime un chemin de fichier." },
          ],
          code: `importer Chemin
importer Fichier

fonction principal() {
    soit dossier = "atelier-fichiers"
    soit chemin = Chemin.joindre(dossier, "notes.txt")

    si (non Fichier.existe(dossier)) {
        Fichier.creer_dossiers(dossier)
    }

    Fichier.ecrire_lignes(chemin, ["un", "deux", "trois"])

    soit lignes = Fichier.lire_lignes(chemin)
    afficher(lignes.taille())
    afficher(lignes[0])
    afficher(Fichier.est_fichier(chemin))
}`,
          examples: [
            {
              title: "Écrire, puis relire",
              body: "Le premier programme de fichiers le plus sûr écrit dans un dossier d’exercice, puis relit immédiatement le même fichier.",
              code: `importer Chemin
importer Fichier

fonction principal() {
    soit dossier = "atelier-fichiers"
    soit fichier = Chemin.joindre(dossier, "message.txt")

    si (non Fichier.existe(dossier)) {
        Fichier.creer_dossiers(dossier)
    }

    Fichier.ecrire_texte(fichier, "Bonjour")
    afficher(Fichier.lire_texte(fichier))
}`,
            },
            {
              title: "Ajouter quand l’historique compte",
              body: "`ecrire_texte` remplace le contenu. `ajouter_texte` ajoute à la fin. Utilisez l’ajout pour les journaux et les enregistrements accumulés.",
              code: `importer Chemin
importer Fichier

fonction principal() {
    soit fichier = Chemin.joindre("atelier-fichiers", "journal.txt")

    Fichier.ecrire_texte(fichier, "début\\n")
    Fichier.ajouter_texte(fichier, "suite\\n")

    afficher(Fichier.lire_texte(fichier))
}`,
            },
          ],
          note: "Après le premier lancement, ouvrez `atelier-fichiers/notes.txt` dans VS Code. Ensuite, remplacez la liste par quatre lignes et relancez. `supprimer_arbre` retire récursivement un arbre de dossiers ; utilisez-le seulement sur des chemins créés volontairement.",
        },
        {
          id: "module-temps",
          title: "Temps : instants, durées et formatage",
          body: [
            "Temps sépare deux idées souvent confondues au début. Un `Instant` est un point précis dans le temps. Une `Durée` est une quantité de temps. On ajoute une durée à un instant ; on mesure la durée entre deux instants.",
            "L’horodatage utilisé par Temps est en millisecondes depuis l’époque Unix. Vous n’avez pas besoin d’y penser constamment, mais c’est utile pour sauvegarder un moment précis ou comparer deux moments.",
            "Dans le code lié au temps, nommez les variables selon ce qu’elles représentent. Des noms comme `debut`, `fin` et `duree` évitent de confondre un moment précis avec une quantité de temps.",
          ],
          bullets: [
            "Utilisez `Temps.maintenant()` quand vous voulez un Instant riche avec méthodes de date/heure.",
            "Utilisez `Temps.horodatage()` quand vous avez seulement besoin d’un entier comparable ou sauvegardable.",
            "Utilisez `Temps.entre(a, b)` au lieu de soustraire manuellement des horodatages quand vous voulez une valeur Durée.",
            "Utilisez exactement les jetons de formatage : `AAAA` pour l’année, `MM` pour le mois, `JJ` pour le jour, `HH` pour l’heure, `mm` pour les minutes, `ss` pour les secondes et `SSS` pour les millisecondes.",
          ],
          refs: [
            { term: "Temps.maintenant()", description: "Retourne l’Instant actuel." },
            { term: "Temps.horodatage()", description: "Retourne l’horodatage actuel en millisecondes." },
            { term: "Temps.depuis_horodatage(ms)", description: "Crée un Instant à partir d’un horodatage en millisecondes." },
            { term: "Temps.analyser(texte, format)", description: "Analyse un texte avec des jetons comme AAAA, MM, JJ, HH, mm, ss et SSS." },
            { term: "instant.formater(format)", description: "Formate un Instant avec les mêmes jetons." },
            { term: "Temps.secondes(n), minutes(n), heures(n), jours(n)", description: "Crée des valeurs Durée." },
            { term: "Temps.entre(debut, fin)", description: "Retourne la Durée entre deux Instants." },
          ],
          code: `importer Temps

fonction principal() {
    soit debut = Temps.depuis_horodatage(1704078245123)
    soit fin = debut.ajouter(Temps.minutes(90))
    soit duree = Temps.entre(debut, fin)

    afficher(debut.formater("AAAA-MM-JJ HH:mm:ss.SSS"))
    afficher(fin.formater("HH:mm:ss"))
    afficher(duree.en_minutes())
}`,
          examples: [
            {
              title: "Formater le même instant de plusieurs façons",
              body: "Le formatage ne change pas l’instant. Il change seulement la façon dont cet instant est affiché au lecteur.",
              code: `importer Temps

fonction principal() {
    soit instant = Temps.depuis_horodatage(1704078245123)

    afficher(instant.formater("AAAA-MM-JJ"))
    afficher(instant.formater("HH:mm:ss"))
}`,
            },
            {
              title: "Ajouter une durée pour prévoir un moment futur",
              body: "Utilisez les durées pour les quantités de temps. Ajoutez une durée à un instant quand vous voulez obtenir un instant futur.",
              code: `importer Temps

fonction principal() {
    soit debut = Temps.depuis_horodatage(1704078245123)
    soit fin = debut.ajouter(Temps.heures(2))

    afficher(fin.formater("HH:mm:ss"))
}`,
            },
          ],
          note: "Remplacez `Temps.minutes(90)` par `Temps.heures(2)` et prédisez l’heure de fin formatée. Temps.attendre met le programme en pause pour une Durée positive ; gardez les exemples courts pour éviter l’impression d’un programme bloqué.",
        },
        {
          id: "module-aleatoire",
          title: "Aléatoire : hasard et expériences reproductibles",
          body: [
            "Utilisez Aléatoire quand un programme a besoin de hasard : lancer un dé, choisir une valeur, mélanger une liste ou prendre un échantillon.",
            "Le module fournit aussi `graine`. Une graine rend la suite aléatoire reproductible. C’est utile dans les leçons et les tests, car vous pouvez obtenir le même résultat à chaque exécution.",
            "Le hasard est plus facile à apprendre quand il est d’abord reproductible. Ajoutez `Aléatoire.graine(...)`, comprenez le programme, puis retirez la graine quand vous voulez des résultats différents à chaque exécution.",
          ],
          bullets: [
            "`entier(min, max)` inclut les deux bornes. Un lancer de dé est `entier(1, 6)`.",
            "`choisir` sert à prendre une seule valeur dans une liste non vide.",
            "`échantillon` sert à prendre plusieurs valeurs distinctes. Le nombre demandé doit être entre zéro et la taille de la liste.",
            "`mélanger` modifie la liste originale. Si vous avez besoin de l’ordre initial plus tard, gardez une copie séparée avant de mélanger.",
          ],
          refs: [
            { term: "Aléatoire.graine(n)", description: "Réinitialise le générateur aléatoire dans un état reproductible." },
            { term: "Aléatoire.entier(min, max)", description: "Retourne un entier entre min et max, bornes incluses." },
            { term: "Aléatoire.décimal()", description: "Retourne un décimal de 0 inclus à 1 exclu." },
            { term: "Aléatoire.décimal_entre(min, max)", description: "Retourne un décimal dans l’intervalle demandé." },
            { term: "Aléatoire.choisir(liste)", description: "Choisit une valeur dans une liste non vide." },
            { term: "Aléatoire.mélanger(liste)", description: "Mélange la liste en place et retourne cette même liste." },
            { term: "Aléatoire.échantillon(liste, n)", description: "Retourne n valeurs distinctes tirées de la liste." },
          ],
          code: `importer Aléatoire

fonction principal() {
    Aléatoire.graine(42)

    soit faces = [1, 2, 3, 4, 5, 6]
    soit lancer = Aléatoire.choisir(faces)
    soit main = Aléatoire.échantillon(["as", "roi", "dame", "valet"], 2)

    afficher("dé=" + lancer)
    afficher(main.joindre(", "))
}`,
          examples: [
            {
              title: "Lancer plusieurs dés",
              body: "`entier(1, 6)` inclut 1 et 6. C’est donc un modèle direct pour un dé standard.",
              code: `importer Aléatoire

fonction principal() {
    Aléatoire.graine(7)

    afficher(Aléatoire.entier(1, 6))
    afficher(Aléatoire.entier(1, 6))
    afficher(Aléatoire.entier(1, 6))
}`,
            },
            {
              title: "Choisir dans une liste",
              body: "Utilisez `choisir` quand les valeurs possibles sont déjà dans une liste. La liste ne doit pas être vide.",
              code: `importer Aléatoire

fonction principal() {
    Aléatoire.graine(3)

    soit couleurs = ["rouge", "vert", "bleu"]
    afficher(Aléatoire.choisir(couleurs))
}`,
            },
          ],
          note: "Lancez ce programme plusieurs fois avec la même graine : le résultat devrait se répéter. Ensuite, retirez `Aléatoire.graine(42)` et relancez. Le nom de module sans accent Aleatoire est aussi accepté.",
        },
        {
          id: "module-luminet",
          title: "LumiNet : adresses, HTTP, sockets et canaux",
          body: [
            "LumiNet est le module standard pour les programmes qui parlent avec d’autres programmes. Il couvre les couches courantes : adresses, DNS, requêtes HTTP, serveurs HTTP, flux TCP, datagrammes UDP et connexions Canal pour les échanges de messages continus.",
            "Le code réseau est différent du code local, parce qu’une autre machine, un service, un pare-feu, un port ou un enregistrement DNS peut décider du résultat. Un programme Lumière correct peut échouer si l’adresse est mauvaise, si le serveur est arrêté, si le port est déjà utilisé ou si la version installée a été compilée sans support LumiNet.",
            "Apprenez LumiNet dans l’ordre le moins risqué : valider des adresses, résoudre des noms, faire une requête HTTP, écrire un petit gestionnaire HTTP, puis utiliser TCP, UDP ou Canal quand HTTP n’a pas la bonne forme pour le besoin.",
          ],
          bullets: [
            "Utilisez `LumiNet.Adresse` avant d’ouvrir une connexion lorsque vous voulez valider un texte comme `127.0.0.1:8080`, séparer l’hôte du port ou vérifier si une adresse est locale.",
            "Utilisez `LumiNet.DNS` quand l’utilisateur donne un nom comme `localhost` et que vous voulez connaître l’adresse que la pile réseau va réellement essayer.",
            "Utilisez `LumiNet.HTTP` pour le travail requête/réponse habituel : lire une page, appeler un service local, envoyer une petite charge utile ou vérifier un statut et des en-têtes.",
            "Utilisez `LumiNet.HTTP.Serveur` quand Lumière doit répondre à des requêtes HTTP. Les routes peuvent lire les paramètres de chemin, les valeurs de requête, les en-têtes et le corps reçu.",
            "Utilisez `LumiNet.TCP` pour les protocoles en flux, lorsque les deux côtés gardent une connexion ouverte et lisent/écrivent du texte ou des octets.",
            "Utilisez `LumiNet.UDP` pour les datagrammes : petits paquets indépendants, diffusion, découverte ou situations où perdre un paquet reste acceptable.",
            "Utilisez `LumiNet.Canal` quand le programme a besoin de messages continus sur une connexion de style WebSocket au lieu d’une seule réponse HTTP.",
          ],
          refs: [
            { term: "LumiNet.Adresse.analyser(texte)", description: "Analyse un texte `hôte:port` et retourne un objet avec `hôte`, `port` et `en_texte()`." },
            { term: "LumiNet.Adresse.est_valide / est_ipv4 / est_ipv6 / est_locale", description: "Répond à des questions d’adresse avant que le programme tente une connexion." },
            { term: "LumiNet.Adresse.locale()", description: "Retourne un objet d’adresse locale. Utile pour les diagnostics et les petits outils locaux." },
            { term: "LumiNet.DNS.résoudre / résoudre_tous / résoudre_inverse", description: "Résout une adresse, toutes les adresses, ou le nom associé à une adresse IP." },
            { term: "délai / delai", description: "Argument optionnel de durée maximale pour les opérations clientes qui le supportent. C’est une valeur Durée, souvent créée avec `Temps.secondes(...)`." },
            { term: "LumiNet.HTTP.obtenir / créer / modifier / supprimer", description: "Envoie GET, POST, PUT ou DELETE. Les arguments nommés incluent `corps`, `type`, `entêtes`/`entetes` et `délai`/`delai`." },
            { term: "RéponseHTTP", description: "Les réponses du client HTTP exposent `statut`, `corps`, `succès`, `entête(nom)` et `entêtes()`." },
            { term: "LumiNet.HTTP.Serveur()", description: "Crée un serveur avec `OBTENIR`, `CRÉER`, `MODIFIER`, `SUPPRIMER`, `avant`, `canal`, `écouter` et `arrêter`/`arreter`." },
            { term: "RequêteHTTP", description: "Les gestionnaires serveur reçoivent un objet requête avec `méthode`, `chemin`, `corps`, `paramètre(nom)`, `requête(nom, défaut?)`, `entête(nom)` et `entêtes()`." },
            { term: "RéponseServeurHTTP", description: "Les gestionnaires répondent avec `envoyer`, `envoyer_json`, `envoyer_fichier`, `rediriger` et `définir_entête`." },
            { term: "LumiNet.TCP.connecter / LumiNet.TCP.Serveur", description: "Ouvre des clients ou serveurs TCP. Les connexions supportent `écrire`, `écrire_octets`, `lire`, `lire_ligne`, `lire_octets`, `définir_délai`, `est_connecté` et `fermer`." },
            { term: "LumiNet.UDP.ouvrir(port?)", description: "Ouvre une socket UDP. Les sockets supportent `envoyer`, `envoyer_octets`, `diffuser`, `recevoir`, `recevoir_octets`, `définir_délai` et `fermer`." },
            { term: "LumiNet.Canal.connecter / LumiNet.Canal.Serveur", description: "Crée des clients ou serveurs de style WebSocket avec des fonctions de rappel pour l’ouverture, les messages, la déconnexion et les erreurs." },
          ],
          code: `importer LumiNet
importer Temps

fonction principal() {
    soit adresse = LumiNet.Adresse.analyser("127.0.0.1:8080")
    afficher(adresse.hôte)
    afficher(adresse.port)

    soit réponse = LumiNet.HTTP.obtenir(
        "http://example.com",
        délai: Temps.secondes(2)
    )

    afficher(réponse.statut)
    afficher(réponse.succès)
}`,
          examples: [
            {
              title: "Vérifier et analyser les adresses avant de se connecter",
              body: "C’est la première bonne habitude avec LumiNet. Elle sépare les erreurs dans une adresse donnée par l’utilisateur des vrais échecs de connexion.",
              code: `importer LumiNet

fonction principal() {
    soit adresse = LumiNet.Adresse.analyser("127.0.0.1:8080")

    afficher(adresse.hôte)
    afficher(adresse.port)
    afficher(adresse.en_texte())

    afficher(LumiNet.Adresse.est_valide("127.0.0.1"))
    afficher(LumiNet.Adresse.est_ipv4("127.0.0.1"))
    afficher(LumiNet.Adresse.est_ipv6("::1"))
    afficher(LumiNet.Adresse.est_locale("127.0.0.1"))
}`,
            },
            {
              title: "Résoudre un nom avant d’expliquer une connexion",
              body: "`localhost` est un nom. La résolution DNS indique l’adresse que le système lui associe. Utilisez-la quand votre programme doit montrer la destination qu’il va essayer.",
              code: `importer LumiNet

fonction principal() {
    soit ip = LumiNet.DNS.résoudre("localhost")
    afficher(ip)

    soit adresses = LumiNet.DNS.résoudre_tous("localhost")
    afficher(adresses.taille())

    soit nom = LumiNet.DNS.résoudre_inverse("127.0.0.1")
    afficher(nom)
}`,
            },
            {
              title: "Comprendre `délai` avant les appels réseau",
              body: "`délai` signifie durée maximale d’attente. L’argument est optionnel, mais il est utile pendant l’apprentissage, car un serveur absent peut sinon donner l’impression que le programme est bloqué.",
              code: `importer LumiNet
importer Temps

fonction principal() {
    soit sans_délai = LumiNet.HTTP.obtenir("http://example.com")

    soit avec_délai = LumiNet.HTTP.obtenir(
        "http://example.com",
        délai: Temps.secondes(2)
    )

    afficher(sans_délai.statut)
    afficher(avec_délai.statut)
}`,
            },
            {
              title: "Voir HTTP comme requête, statut, en-têtes et corps",
              body: "Une réponse HTTP n’est pas seulement du texte. `statut` dit ce qui s’est passé, `succès` vaut vrai pour les statuts 2xx, `corps` contient le corps de la réponse et `entête` lit un en-tête.",
              code: `importer LumiNet
importer Temps

fonction principal() {
    soit réponse = LumiNet.HTTP.obtenir(
        "http://example.com",
        délai: Temps.secondes(2)
    )

    afficher(réponse.statut)
    afficher(réponse.succès)
    afficher(réponse.entête("Content-Type"))

    si (réponse.succès) {
        afficher(réponse.corps)
    } sinon {
        afficher("La requête a échoué.")
    }
}`,
            },
            {
              title: "Envoyer une petite charge utile HTTP",
              body: "`créer` envoie POST, `modifier` envoie PUT et `supprimer` envoie DELETE. Utilisez `corps` pour la charge utile et `type` pour l’en-tête `Content-Type`.",
              code: `importer LumiNet
importer Temps

fonction principal() {
    soit réponse = LumiNet.HTTP.créer(
        "http://127.0.0.1:8080/messages",
        corps: "bonjour",
        type: "text/plain",
        délai: Temps.secondes(2)
    )

    afficher(réponse.statut)
    afficher(réponse.succès)
}`,
            },
            {
              title: "Écrire un petit serveur HTTP",
              body: "Un gestionnaire de route reçoit une requête et un objet de réponse. Les paramètres de chemin viennent de `:nom`; les valeurs de requête viennent de la partie après `?`; les en-têtes viennent de la requête.",
              code: `importer LumiNet

fonction bonjour(req: Universel, rep: Universel) {
    soit nom = req.paramètre("nom")
    soit ton = req.requête("ton", "simple")

    rep.définir_entête("X-Lumiere", "ok")
    rep.envoyer(200, "Bonjour " + nom + " (" + ton + ")")
}

fonction principal() {
    soit serveur = LumiNet.HTTP.Serveur()
    serveur.OBTENIR("/bonjour/:nom", bonjour)
    serveur.écouter("127.0.0.1", 8080)
}`,
            },
            {
              title: "Utiliser un middleware pour le travail HTTP partagé",
              body: "`avant` enregistre une fonction qui s’exécute avant le gestionnaire de route. Le troisième paramètre, souvent nommé `suivant`, continue vers l’étape suivante. C’est utile pour les en-têtes ou le journal qui doivent s’appliquer à plusieurs routes.",
              code: `importer LumiNet

fonction ajouter_entête(req: Universel, rep: Universel, suivant: Universel) {
    rep.définir_entête("X-Outil", "lumiere")
    suivant()
}

fonction statut(req: Universel, rep: Universel) {
    rep.envoyer(200, "statut=ok")
}

fonction principal() {
    soit serveur = LumiNet.HTTP.Serveur()
    serveur.avant(ajouter_entête)
    serveur.OBTENIR("/statut", statut)
    serveur.écouter("127.0.0.1", 8080)
}`,
            },
            {
              title: "Rediriger ou servir un fichier depuis un gestionnaire HTTP",
              body: "L’objet de réponse a plusieurs formes de réponse. Utilisez `rediriger` quand le client doit demander une autre URL. Utilisez `envoyer_fichier` quand un fichier régulier doit devenir le corps de la réponse; LumiNet choisit un type de contenu depuis l’extension.",
              code: `importer LumiNet

fonction accueil(req: Universel, rep: Universel) {
    rep.rediriger("/index.html")
}

fonction page(req: Universel, rep: Universel) {
    rep.envoyer_fichier(200, "site/index.html")
}

fonction principal() {
    soit serveur = LumiNet.HTTP.Serveur()
    serveur.OBTENIR("/", accueil)
    serveur.OBTENIR("/index.html", page)
    serveur.écouter("127.0.0.1", 8080)
}`,
            },
            {
              title: "Utiliser TCP quand il faut un flux",
              body: "TCP est une connexion continue. Un côté écrit des octets ou du texte; l’autre lit depuis le même flux. Ajoutez un délai quand une lecture ne doit pas attendre indéfiniment.",
              code: `importer LumiNet
importer Temps

fonction principal() {
    soit connexion = LumiNet.TCP.connecter(
        "127.0.0.1",
        9000,
        délai: Temps.secondes(2)
    )

    connexion.écrire("bonjour\\n")
    afficher(connexion.est_connecté())
    connexion.fermer()
}`,
            },
            {
              title: "Écrire un serveur TCP qui répond en écho",
              body: "Un serveur TCP a besoin d’un callback `quand_connexion` avant de pouvoir écouter. Le callback reçoit un objet connexion. Cet exemple lit une ligne, écrit une réponse et ferme cette connexion.",
              code: `importer LumiNet
importer Temps

fonction répondre(connexion: Universel) {
    connexion.définir_délai(Temps.secondes(10))

    soit ligne = connexion.lire_ligne()
    connexion.écrire("écho:" + ligne + "\\n")
    connexion.fermer()
}

fonction principal() {
    soit serveur = LumiNet.TCP.Serveur()
    serveur.quand_connexion(répondre)
    serveur.écouter("127.0.0.1", 9000)
}`,
            },
            {
              title: "Utiliser UDP quand chaque message est son propre paquet",
              body: "UDP ne crée pas de connexion. Vous ouvrez une socket, envoyez un datagramme et recevez des datagrammes qui indiquent l’adresse et le port de l’expéditeur. Définissez un délai avant de recevoir.",
              code: `importer LumiNet
importer Temps

fonction principal() {
    soit socket = LumiNet.UDP.ouvrir(9001)
    socket.définir_délai(Temps.secondes(2))

    socket.envoyer("salut", "127.0.0.1", 9001)

    soit paquet = socket.recevoir()
    afficher(paquet.données)
    afficher(paquet.adresse)
    afficher(paquet.port)

    socket.fermer()
}`,
            },
            {
              title: "Envoyer des octets UDP ou diffuser du texte",
              body: "`envoyer_octets` et `recevoir_octets` servent aux protocoles qui travaillent avec des valeurs d’octets brutes. `diffuser` envoie un datagramme texte à l’adresse de diffusion sur un port.",
              code: `importer LumiNet
importer Temps

fonction principal() {
    soit socket = LumiNet.UDP.ouvrir()
    socket.définir_délai(Temps.secondes(2))

    socket.envoyer_octets([76, 85, 77], "127.0.0.1", 9001)
    socket.diffuser("lumiere?", 9001)

    socket.fermer()
}`,
            },
            {
              title: "Utiliser Canal pour les messages continus",
              body: "Canal sert aux échanges de style WebSocket. Le client enregistre des fonctions de rappel, envoie un message, puis attend pour que les messages entrants puissent être livrés à `quand_message`.",
              code: `importer LumiNet

fonction reçu(message: Universel) {
    afficher(message)
}

fonction principal() {
    soit canal = LumiNet.Canal.connecter("ws://127.0.0.1:8080/chat")
    canal.quand_message(reçu)
    canal.envoyer("salut")
    canal.attendre()
}`,
            },
            {
              title: "Écrire un serveur Canal",
              body: "Un serveur Canal est organisé autour de callbacks. `quand_connexion` s’exécute quand un client arrive; `quand_message` s’exécute à chaque message texte; `quand_déconnexion` et `quand_erreur` sont disponibles pour le cycle de vie.",
              code: `importer LumiNet

fonction sur_connexion(client: Universel) {
    client.envoyer("bienvenue")
}

fonction sur_message(client: Universel, message: Universel) {
    client.envoyer("écho:" + message)
}

fonction principal() {
    soit serveur = LumiNet.Canal.Serveur()
    serveur.quand_connexion(sur_connexion)
    serveur.quand_message(sur_message)
    serveur.écouter("127.0.0.1", 8081)
}`,
            },
            {
              title: "Transformer une route HTTP en Canal",
              body: "`LumiNet.HTTP.Serveur` peut aussi exposer une route Canal avec `canal`. Utilisez cela quand le même serveur local doit répondre à des routes HTTP ordinaires et à des routes de messages de style WebSocket.",
              code: `importer LumiNet

fonction canal_ouvert(client: Universel) {
    client.envoyer("prêt")
}

fonction principal() {
    soit serveur = LumiNet.HTTP.Serveur()
    serveur.canal("/chat", canal_ouvert)
    serveur.écouter("127.0.0.1", 8080)
}`,
            },
          ],
          note: "Le client HTTP actuel supporte les URL `http` simples. Les exemples serveur restent à l’écoute jusqu’à ce que vous arrêtiez le programme ou appeliez `arrêter`/`arreter` depuis votre propre logique. Utilisez des délais explicites pour les appels client et les lectures de socket pendant l’apprentissage, car attendre indéfiniment est généralement un problème de conception du programme.",
        },
        {
          id: "reference-commandes",
          title: "Référence rapide des commandes",
          body: [
            "Voici les commandes quotidiennes à connaître pendant l’apprentissage de Lumière.",
          ],
          refs: [
            { term: "lumiere fichier.lum", description: "Exécute un fichier source." },
            { term: "lumiere", description: "Ouvre le shell interactif persistant." },
            { term: "lumiere tester tests", description: "Lance les fichiers LumiTest sous un dossier de tests." },
            { term: "lumiere --help", description: "Affiche l’aide de ligne de commande." },
            { term: "lumiere --version", description: "Affiche la version installée." },
          ],
        },
      ],
    },
    examples: {
      title: "Exemples Lumière",
      intro: "Des programmes plus grands qui montrent comment structurer du code Lumière quand le but dépasse une seule fonctionnalité du langage.",
      sections: [
        {
          id: "lire-les-exemples",
          title: "Comment lire ces exemples",
          body: [
            "Ces exemples ne sont pas des extraits de première leçon. Ils montrent la forme de programmes Lumière qui combinent fonctions, collections, classes, modules et API de bibliothèque standard.",
            "Les exemples restent dans l’alpha actuelle. Ils ne prétendent pas que Lumière possède un parseur JSON, un pilote de base de données, un client TLS, un serveur de paquets ou un runtime asynchrone quand ces éléments ne font pas partie de la surface documentée.",
            "Commencez par lire les noms de fonctions. Lisez ensuite le modèle de données. Lisez seulement après le corps de chaque fonction. Les programmes sérieux deviennent plus simples à comprendre quand les noms décrivent le rôle de chaque partie.",
          ],
          bullets: [
            "Utilisez les fonctions pour isoler les décisions : analyser, valider, chercher, formater et afficher ne devraient pas tous vivre dans le même bloc.",
            "Utilisez des collections typées quand les valeurs doivent garder la même forme dans tout le programme.",
            "Utilisez des classes quand plusieurs valeurs voyagent ensemble et que le nom de l’objet compte.",
            "Utilisez les exemples LumiNet comme exemples de développement local d’abord. Liez le serveur à `127.0.0.1` pendant l’apprentissage.",
          ],
        },
        {
          id: "projet-multi-fichiers-taches",
          title: "Projet multi-fichiers : suivi de tâches typé",
          body: [
            "Un programme Lumière sérieux ne devrait pas grossir comme un seul fichier géant. Séparez les concepts stables en modules, exportez seulement ce que les autres fichiers doivent utiliser avec `public`, et gardez `main.lum` concentré sur l’orchestration.",
            "Ce projet reste volontairement plat, car l’importeur actuel résout proprement les modules frères depuis la racine du projet. Il montre quand même une vraie séparation : modèle métier, statistiques, affichage tableau et point d’entrée.",
            "Lancez le projet depuis le dossier qui contient `main.lum` afin que les imports comme `importer Taches.{...}` soient résolus contre les fichiers du projet.",
          ],
          refs: [
            { term: "Taches.lum", description: "Modèle métier : la classe `Tache` et les opérations sur les tâches." },
            { term: "Statistiques.lum", description: "Calculs purs sur une liste de tâches." },
            { term: "Tableau.lum", description: "Présentation terminal pour les lignes de tâches." },
            { term: "main.lum", description: "Point d’entrée : importe les modules, crée les données, modifie l’état et affiche le rapport." },
          ],
          code: `lumiere-projet/
  main.lum
  Taches.lum
  Statistiques.lum
  Tableau.lum`,
          examples: [
            {
              title: "Taches.lum",
              body: "Le fichier métier possède le type `Tache`. Les autres fichiers n’ont pas besoin de savoir comment une tâche est créée ou terminée.",
              code: `public classe Tache {
    id: Entier
    titre: Texte
    priorite: Entier
    terminee: Logique

    fonction etiquette() -> Texte {
        soit statut = "ouverte"

        si (ici.terminee) {
            statut = "terminee"
        }

        retourne "#" + ici.id + " [" + statut + "] " + ici.titre
    }
}

public fonction creer(id: Entier, titre: Texte, priorite: Entier) -> Tache {
    retourne Tache(id: id, titre: titre, priorite: priorite, terminee: faux)
}

public fonction terminer(tache: Tache) {
    tache.terminee = vrai
}

public fonction est_terminee(tache: Tache) -> Logique {
    retourne tache.terminee
}`,
            },
            {
              title: "Statistiques.lum",
              body: "Ce module importe le type de tâche et une question métier, puis expose des calculs qui n’affichent rien.",
              code: `importer Taches.{Tache, est_terminee}

public fonction compter_terminees(taches: Liste[Tache]) -> Entier {
    soit total = 0

    pour chaque tache dans taches {
        si (est_terminee(tache)) {
            total = total + 1
        }
    }

    retourne total
}

public fonction compter_ouvertes(taches: Liste[Tache]) -> Entier {
    retourne taches.taille() - compter_terminees(taches)
}`,
            },
            {
              title: "Tableau.lum",
              body: "La présentation est isolée du modèle et des statistiques. Si le format de sortie change, c’est ce fichier qu’il faut modifier.",
              code: `importer Taches.{Tache}

public fonction afficher_tableau(taches: Liste[Tache]) {
    afficher("TACHES")
    afficher("------")

    pour chaque tache dans taches {
        afficher(tache.etiquette() + " priorité=" + tache.priorite)
    }
}`,
            },
            {
              title: "main.lum",
              body: "`main.lum` compose les modules. Il crée la liste, change une tâche, puis demande aux modules de rapport de faire leur travail.",
              code: `importer Taches.{Tache, creer, terminer}
importer Statistiques.{compter_ouvertes, compter_terminees}
importer Tableau.{afficher_tableau}

fonction principal() {
    soit taches: Liste[Tache] = []

    taches.ajouter(creer(1, "concevoir API", 10))
    taches.ajouter(creer(2, "écrire documentation", 7))
    taches.ajouter(creer(3, "corriger tests", 9))

    terminer(taches[1])

    afficher_tableau(taches)
    afficher("ouvertes=" + compter_ouvertes(taches))
    afficher("terminees=" + compter_terminees(taches))
}`,
            },
          ],
          note: "Depuis `lumiere-projet`, lancez `lumiere main.lum`.",
        },
        {
          id: "journal-taches-fichier",
          title: "Programme avec fichier : journal de tâches",
          body: [
            "Un outil de ligne de commande utile a souvent besoin d’un peu de persistance. Lumière peut lire et écrire des fichiers avec `Fichier` ; combinez-le avec `Chemin` pour construire les chemins au même endroit.",
            "Cet exemple crée un dossier de données si nécessaire, écrit un fichier initial, ajoute une ligne, relit le fichier comme liste de lignes, puis affiche un rapport numéroté.",
            "Le fichier reste volontairement en texte simple. Le texte simple est facile à inspecter dans VS Code et facile à récupérer si le programme change plus tard.",
          ],
          refs: [
            { term: "Chemin.joindre", description: "Construit le chemin du fichier à partir de morceaux stables." },
            { term: "Fichier.creer_dossiers", description: "Crée le dossier de données avant d’écrire dedans." },
            { term: "Fichier.ecrire_lignes", description: "Écrit une liste de textes sous forme de lignes séparées par des retours à la ligne." },
            { term: "liste.ajouter + Fichier.ecrire_lignes", description: "Ajoute une tâche à la liste en mémoire, puis réécrit la liste complète sur disque." },
            { term: "Fichier.lire_lignes", description: "Relit le fichier comme liste pour traiter chaque tâche séparément." },
          ],
          code: `importer Chemin
importer Fichier

fonction preparer_fichier() -> Texte {
    soit dossier = "donnees"
    soit chemin = Chemin.joindre(dossier, "taches.txt")

    si (non Fichier.existe(dossier)) {
        Fichier.creer_dossiers(dossier)
    }

    si (non Fichier.existe(chemin)) {
        Fichier.ecrire_lignes(chemin, ["concevoir API", "écrire tests"])
    }

    retourne chemin
}

fonction ajouter_tache(chemin: Texte, titre: Texte) {
    soit propre = titre.elaguer()

    si (propre == "") {
        retourne
    }

    soit lignes = Fichier.lire_lignes(chemin)
    lignes.ajouter(propre)
    Fichier.ecrire_lignes(chemin, lignes)
}

fonction afficher_taches(chemin: Texte) {
    soit lignes = Fichier.lire_lignes(chemin)
    soit numero = 1

    pour chaque ligne dans lignes {
        afficher(numero + ". " + ligne)
        numero = numero + 1
    }
}

fonction principal() {
    soit chemin = preparer_fichier()

    ajouter_tache(chemin, "documenter Fichier")
    afficher_taches(chemin)
}`,
          note: "Lancez cet exemple depuis un dossier d’exercice. Il crée `donnees/taches.txt`, puis le relit.",
        },
        {
          id: "serveur-taches-luminet",
          title: "Serveur LumiNet complet : API de tâches avec HTTP et Canal",
          body: [
            "Voici une forme complète de serveur local : middleware partagé, gestionnaires de routes, état en mémoire, réponses texte, corps de requête, paramètres de chemin, route de statut et route Canal pour les messages en direct.",
            "Le serveur garde les données en mémoire. C’est volontaire. LumiNet fournit les primitives réseau ; il ne fournit pas de couche base de données. Si le processus s’arrête, les tâches en mémoire disparaissent.",
            "L’API HTTP écrit des corps de réponse texte simples parce que la bibliothèque standard documentée actuelle ne contient pas de module JSON ni de support d’échappement de guillemets dans les chaînes. L’exemple utilise donc des réponses texte `id=...;titre=...` pour rester correct.",
          ],
          refs: [
            { term: "GET /statut", description: "Route de santé qui retourne une petite réponse texte." },
            { term: "GET /taches/:id", description: "Lit une tâche à partir d’un paramètre de chemin." },
            { term: "POST /taches", description: "Crée une tâche depuis le corps brut de la requête." },
            { term: "GET /", description: "Redirige vers `/statut`." },
            { term: "Canal /evenements", description: "Accepte une connexion de style WebSocket et envoie un événement de bienvenue." },
          ],
          code: `importer LumiNet

soit taches: Dictionnaire[Texte, Texte] = {}
soit prochain_id = 0

fonction texte_tache(id: Texte, titre: Texte) -> Texte {
    retourne "id=" + id + ";titre=" + titre
}

fonction repondre(rep: Universel, statut: Entier, corps: Texte) {
    rep.définir_entête("X-Lumiere", "exemples")
    rep.envoyer(statut, corps)
}

fonction journal(req: Universel, rep: Universel, suivant: Universel) {
    afficher(req.méthode + " " + req.chemin)
    rep.définir_entête("Access-Control-Allow-Origin", "*")
    suivant()
}

fonction accueil(req: Universel, rep: Universel) {
    rep.rediriger("/statut")
}

fonction statut(req: Universel, rep: Universel) {
    repondre(rep, 200, "statut=ok;service=taches")
}

fonction creer_tache(req: Universel, rep: Universel) {
    soit titre = req.corps.elaguer()

    si (titre == "") {
        repondre(rep, 400, "erreur=titre manquant")
        retourne
    }

    prochain_id = prochain_id + 1
    soit id = "" + prochain_id
    taches[id] = titre

    repondre(rep, 201, texte_tache(id, titre))
}

fonction lire_tache(req: Universel, rep: Universel) {
    soit id = req.paramètre("id")

    si (non taches.contient(id)) {
        repondre(rep, 404, "erreur=tache introuvable")
        retourne
    }

    repondre(rep, 200, texte_tache(id, taches[id]))
}

fonction canal_evenements(client: Universel) {
    client.envoyer("connecté au flux des tâches")
    client.envoyer("taches=" + taches.taille())
}

fonction principal() {
    soit serveur = LumiNet.HTTP.Serveur()

    serveur.avant(journal)
    serveur.OBTENIR("/", accueil)
    serveur.OBTENIR("/statut", statut)
    serveur.OBTENIR("/taches/:id", lire_tache)
    serveur.CRÉER("/taches", creer_tache)
    serveur.canal("/evenements", canal_evenements)

    afficher("Serveur Lumière sur http://127.0.0.1:8080")
    serveur.écouter("127.0.0.1", 8080)
}`,
          note: "Lancez cet exemple comme service local. Les exemples client/serveur HTTP actuels utilisent `http` simple, et ce serveur reste à l’écoute jusqu’à ce que vous arrêtiez le processus.",
        },
        {
          id: "recherche-et-tri",
          title: "Recherche binaire et tri par insertion",
          body: [
            "La recherche binaire est utile quand la liste est déjà triée. Elle coupe la zone de recherche en deux à chaque étape.",
            "Le tri par insertion est un bon tri d’apprentissage parce qu’il montre clairement l’idée centrale : garder la partie gauche triée, puis insérer la prochaine valeur au bon endroit.",
          ],
          code: `importer Maths

fonction rechercher_binaire(valeurs: Liste[Entier], cible: Entier) -> Entier {
    soit gauche = 0
    soit droite = valeurs.taille() - 1

    tant que (gauche <= droite) {
        soit milieu = Maths.tronquer((gauche + droite) / 2)
        soit valeur = valeurs[milieu]

        si (valeur == cible) {
            retourne milieu
        }

        si (valeur < cible) {
            gauche = milieu + 1
        } sinon {
            droite = milieu - 1
        }
    }

    retourne -1
}

fonction tri_insertion(valeurs: Liste[Entier]) -> Liste[Entier] {
    soit i = 1

    tant que (i < valeurs.taille()) {
        soit cle = valeurs[i]
        soit j = i - 1

        tant que (j >= 0) {
            si (valeurs[j] <= cle) {
                arrêter
            }

            valeurs[j + 1] = valeurs[j]
            j = j - 1
        }

        valeurs[j + 1] = cle
        i = i + 1
    }

    retourne valeurs
}

fonction principal() {
    soit nombres = tri_insertion([7, 3, 9, 1, 4])

    afficher(nombres.joindre(","))
    afficher(rechercher_binaire(nombres, 4))
    afficher(rechercher_binaire(nombres, 8))
}`,
          note: "La recherche retourne la position de la valeur, ou `-1` quand la valeur est absente.",
        },
        {
          id: "analyse-texte",
          title: "Analyse de texte avec dictionnaires",
          body: [
            "Un dictionnaire est naturel pour compter. La clé est l’élément compté, et la valeur est le nombre de fois où il apparaît.",
            "Cet exemple normalise le texte, le découpe en mots, ignore les morceaux vides et met à jour les compteurs dans un dictionnaire typé.",
          ],
          code: `fonction compter_mots(texte: Texte) -> Dictionnaire[Texte, Entier] {
    soit resultat: Dictionnaire[Texte, Entier] = {}
    soit mots = texte.elaguer().minuscules().separer(" ")

    pour chaque mot dans mots {
        soit propre = mot.elaguer()

        si (propre == "") {
            continuer
        }

        si (resultat.contient(propre)) {
            resultat[propre] = resultat[propre] + 1
        } sinon {
            resultat[propre] = 1
        }
    }

    retourne resultat
}

fonction principal() {
    soit comptes = compter_mots("lumiere code lumiere test code")

    afficher(comptes["lumiere"])
    afficher(comptes["code"])
    afficher(comptes.cles().joindre(","))
}`,
          note: "La tokenisation reste volontairement simple. Elle découpe sur les espaces ; la ponctuation peut être gérée avec une étape de nettoyage supplémentaire.",
        },
        {
          id: "plus-court-chemin-graphe",
          title: "Plus court chemin dans un graphe non pondéré",
          body: [
            "La recherche en largeur explore un graphe par vagues. C’est la méthode standard pour trouver un plus court chemin quand chaque arête a le même coût.",
            "La file garde les sommets à explorer. Le dictionnaire `visites` évite les boucles. Le dictionnaire `precedent` garde la manière dont l’algorithme est arrivé à chaque sommet pour reconstruire le chemin final.",
          ],
          code: `fonction plus_court_chemin(
    graphe: Dictionnaire[Texte, Liste[Texte]],
    depart: Texte,
    arrivee: Texte
) -> Liste[Texte] {
    soit file: Liste[Texte] = [depart]
    soit visites: Dictionnaire[Texte, Logique] = {}
    soit precedent: Dictionnaire[Texte, Texte] = {}

    visites[depart] = vrai

    tant que (non file.vide()) {
        soit courant = file.retirer_a(0)

        si (courant == arrivee) {
            arrêter
        }

        pour chaque voisin dans graphe[courant] {
            si (non visites.contient(voisin)) {
                visites[voisin] = vrai
                precedent[voisin] = courant
                file.ajouter(voisin)
            }
        }
    }

    si (non visites.contient(arrivee)) {
        retourne []
    }

    soit chemin: Liste[Texte] = []
    soit courant = arrivee

    tant que (courant != depart) {
        chemin.inserer(0, courant)
        courant = precedent[courant]
    }

    chemin.inserer(0, depart)
    retourne chemin
}

fonction principal() {
    soit graphe: Dictionnaire[Texte, Liste[Texte]] = {
        "A": ["B", "C"],
        "B": ["A", "D"],
        "C": ["A", "D", "E"],
        "D": ["B", "C", "F"],
        "E": ["C", "F"],
        "F": ["D", "E"]
    }

    soit chemin = plus_court_chemin(graphe, "A", "F")
    afficher(chemin.joindre(" -> "))
}`,
        },
        {
          id: "ordonnanceur-classes",
          title: "Ordonnanceur de priorité avec classes",
          body: [
            "Les classes sont utiles quand un programme a besoin d’enregistrements nommés. Une tâche n’est pas seulement une entrée de dictionnaire ici ; elle a un titre, une priorité et un comportement avec `decrire`.",
            "L’ordonnanceur garde la liste triée au moment de l’insertion. Les tâches les plus prioritaires restent au début.",
          ],
          code: `classe Tache {
    titre: Texte
    priorite: Entier

    fonction decrire() -> Texte {
        retourne "[" + ici.priorite + "] " + ici.titre
    }
}

fonction inserer_tache(file: Liste[Tache], tache: Tache) {
    soit position = 0

    tant que (position < file.taille()) {
        si (file[position].priorite < tache.priorite) {
            arrêter
        }

        position = position + 1
    }

    file.inserer(position, tache)
}

fonction principal() {
    soit file: Liste[Tache] = []

    inserer_tache(file, Tache(titre: "corriger bug réseau", priorite: 10))
    inserer_tache(file, Tache(titre: "écrire documentation", priorite: 6))
    inserer_tache(file, Tache(titre: "nettoyer exemples", priorite: 8))

    pour chaque tache dans file {
        afficher(tache.decrire())
    }
}`,
          note: "C’est la même idée utilisée dans beaucoup d’ordonnanceurs : insérer ou choisir le travail selon une règle de priorité.",
        },
      ],
    },
    architecture: {
      title: "Référence d’architecture",
      intro: "Comment Lumière lit le source français, signale les erreurs, exécute les programmes et expose les capacités natives via la bibliothèque standard.",
      sections: [
        {
          id: "source-francais",
          title: "Source français et identifiants accentués",
          body: [
            "Lumière accepte les mots-clés français et les noms accentués dès la couche lexicale. Le scan des identifiants accepte les octets UTF-8 non ASCII, donc des noms comme `âge`, `élève`, `réponse`, `délai` et `arrêter` sont du source valide au lieu d’être des cas spéciaux traités plus tard.",
            "Certains mots-clés et certaines API fournissent aussi des alias ASCII lorsque c’est utile pour les claviers, terminaux ou environnements sans accents. Exemples : `réalise`/`realise`, `privé`/`prive`, `arrêter`/`arreter` et `Aléatoire`/`Aleatoire`.",
          ],
          refs: [
            { term: "Début d’identifiant", description: "Lettres, `_` et octets UTF-8 de début sont acceptés au début d’un nom." },
            { term: "Suite d’identifiant", description: "Lettres, chiffres, `_` et octets UTF-8 de continuation sont acceptés après le premier caractère." },
            { term: "Symboles", description: "Les littéraux `Symbole` valident que le contenu est exactement un caractère Unicode." },
            { term: "Texte", description: "Les helpers de texte utilisent des helpers Unicode lorsque le comptage de caractères visibles compte." },
          ],
          code: `token {
  type: IDENT | mot-clé | littéral | opérateur
  lexeme: octets source originaux
  line, column: position utilisateur
  start_offset, end_offset: plage d’octets pour outils
  start_line, start_column: ancre diagnostic
}

identifiant:
  premier: lettre ASCII | "_" | octet UTF-8 de début
  suite: lettre ASCII | chiffre | "_" | octet UTF-8`,
        },
        {
          id: "pipeline-execution",
          title: "Pipeline d’exécution",
          body: [
            "Les premières étapes sont partagées. Le source est tokenisé, parsé en instructions et expressions, puis enveloppé dans un résultat d’analyse qui peut contenir soit un programme, soit des diagnostics.",
            "Après l’analyse, la commande décide quoi faire. Une commande de vérification s’arrête aux diagnostics. L’inspection lit le programme analysé comme donnée d’éditeur. L’exécution normale envoie le programme vers un backend. L’inspection VM abaisse le programme et affiche la représentation compilée.",
          ],
          refs: [
            { term: "Tokenisation", description: "Transforme les octets en tokens tout en conservant lignes, colonnes et offsets pour les diagnostics." },
            { term: "Parsing", description: "Transforme les tokens en instructions et expressions : déclarations, appels, classes, interfaces, boucles, imports, retours et gestion d’erreurs." },
            { term: "Résultat d’analyse", description: "Transporte instructions parsées et diagnostics ensemble pour que les commandes puissent décider si elles continuent." },
            { term: "Exécution", description: "Exécute `principal` avec le backend choisi après parsing réussi." },
          ],
          code: `analyze_source(source, source_path):
  tokens = lex(source)
  diagnostics = lexer.diagnostics

  if diagnostics contient erreurs:
    return { statements: [], diagnostics }

  statements = parse(tokens)
  diagnostics += parser.diagnostics

  return { statements, diagnostics }

dispatch commande:
  check      -> analyse seulement
  inspect    -> analyse + requête de position
  run        -> analyse + exécution backend
  vm inspect -> analyse + LIR + dump bytecode`,
        },
        {
          id: "diagnostics",
          title: "Diagnostics",
          body: [
            "Les diagnostics sont construits avec une portée source, une sévérité, un message et un chemin source optionnel. La même structure sert à l’affichage terminal et à la sortie JSON structurée pour les outils.",
            "Les diagnostics du lexer sont collectés d’abord. S’ils contiennent des erreurs, le parsing est ignoré. Si le lexing réussit, les diagnostics du parser sont ajoutés. Les erreurs runtime utilisent ensuite les sites d’appel pour pointer vers le source pendant l’exécution.",
          ],
          bullets: [
            "Un diagnostic doit identifier la plus petite portée source utile.",
            "La récupération du parser doit continuer à signaler les problèmes syntaxiques indépendants quand c’est possible.",
            "Les messages doivent décrire la règle du langage, pas les détails internes.",
            "La sortie JSON doit rester assez stable pour l’outillage éditeur.",
          ],
          code: `Diagnostic {
  severity: error | warning | information | hint
  message: string
  source_path: string
  range: {
    start_line, start_column
    end_line, end_column
    start_offset, end_offset
  }
}

flux d’échec:
  erreur lexer -> diagnostic -> parser ignoré
  erreur parser -> diagnostic -> pas d’exécution
  erreur runtime -> RuntimeSite -> rapport avec position source`,
        },
        {
          id: "forme-ast",
          title: "Forme de l’AST",
          body: [
            "L’AST sépare expressions et instructions. Les expressions produisent des valeurs. Les instructions effectuent des actions, introduisent des noms, changent le contrôle de flux ou regroupent d’autres instructions.",
            "Cette séparation compte parce que l’interpréteur et le lowering VM consomment la même structure proche du source. Une nouvelle fonctionnalité syntaxique doit être placée dans l’AST selon son sens, pas seulement selon sa forme textuelle.",
          ],
          refs: [
            { term: "Nœuds d’expression", description: "Littéraux, identifiants, opérations binaires et unaires, conversions, tests de type, fonctions anonymes, appels, listes, dictionnaires, accès membre et accès par indice." },
            { term: "Nœuds d’instruction", description: "Blocs, déclarations de variables, fonctions, classes, interfaces, imports, branches, boucles, retours, lancers, essayer/attraper/finalement et instructions d’expression." },
            { term: "Visitors", description: "L’interpréteur et les passes de compilation consomment les nœuds via des visitors d’expressions et d’instructions, ce qui rend la traversée explicite." },
            { term: "Tokens conservés", description: "Les nœuds AST gardent les tokens importants pour que les phases suivantes puissent reporter emplacements et noms correctement." },
          ],
          code: `Expr
  Literal(token)
  Identifier(name)
  Binary(left, op, right)
  Call(callee, paren, args)
  MemberAccess(object, dot, member)
  IndexAccess(object, bracket, index)
  FunctionExpr(keyword, params, return_type, body)

Stmt
  VarDecl(name, type, initializer)
  FunctionDecl(name, params, return_type, body)
  ClassDecl(name, fields, methods, interfaces)
  Import(module, alias, selected_members)
  If / For / While / Return / Throw / Try

contrat consommateurs:
  parser crée les nœuds
  interpréteur visite les nœuds
  compilateur VM abaisse les nœuds
  diagnostics utilisent les tokens des nœuds`,
          note: "Si une fonctionnalité ne se représente pas proprement comme expression, instruction, déclaration ou comportement de module, la conception doit être clarifiée avant l’implémentation.",
        },
        {
          id: "controle-flux",
          title: "Contrôle de flux pendant l’exécution",
          body: [
            "Certaines constructions du langage ne produisent pas de valeurs ordinaires. `retourne`, `arrêter`, `continuer` et `lancer` changent le chemin d’exécution. L’interpréteur direct les modélise comme des transferts de contrôle pour qu’une instruction profondément imbriquée puisse sortir de la fonction, de la boucle ou du bloc d’erreur correct.",
            "La VM représente la même idée avec des opérations bytecode et des sauts explicites. Branches, boucles, régions d’erreur, lancers et retours deviennent du contrôle de flux au niveau instruction au lieu d’une traversée récursive de l’AST.",
          ],
          bullets: [
            "`retourne` quitte la fonction courante et transporte la valeur retournée.",
            "`arrêter` quitte la boucle la plus proche.",
            "`continuer` saute à l’itération suivante de la boucle.",
            "`lancer` démarre la propagation d’erreur jusqu’à ce qu’un handler compatible la reçoive.",
            "`essayer` / `attraper` / `finalement` doivent préserver à la fois les erreurs visibles et le comportement de nettoyage.",
          ],
          code: `transferts tree-walk:
  Return(value)      -> capturé par l’appel de fonction courant
  Break              -> capturé par la boucle la plus proche
  Continue           -> capturé par l’itération courante
  Throw(value/site)  -> capturé par le handler compatible

transferts VM:
  RETURN
  JUMP / JUMP_IF_FALSE
  TRY_BEGIN / TRY_END
  THROW`,
        },
        {
          id: "tree-walk",
          title: "Interpréteur tree-walk",
          body: [
            "L’interpréteur tree-walk exécute l’AST directement. C’est le chemin de référence pour le comportement du langage parce qu’il évalue les mêmes structures d’instructions et d’expressions que celles produites par le parser.",
            "Ce backend possède la sémantique directe des portées de variables, appels de fonctions, closures, instances d’objets, champs, méthodes, héritage, interfaces, imports, retours, contrôle de boucle, lancers et appels natifs.",
          ],
          refs: [
            { term: "Environment", description: "Stocke noms, portées et closures pendant l’exécution directe." },
            { term: "Contrôle de flux", description: "`retourne`, `arrêter`, `continuer` et `lancer` sont des transferts de contrôle runtime, pas des valeurs ordinaires." },
            { term: "Modules", description: "Les imports chargent les modules, les évaluent une fois et exposent seulement les membres publics." },
            { term: "Appels natifs", description: "Les fonctions de bibliothèque standard sont exposées comme fonctions runtime et reçoivent des valeurs Lumière." },
          ],
          code: `État interpréteur:
  globals: Environment
  current: Environment
  cache modules: nom/chemin -> Module évalué
  annotations runtime: Value -> type optionnel

execute(stmt):
  Block       -> Environment enfant
  VarDecl     -> lie le nom dans l’environnement courant
  Function    -> capture l’environnement de closure
  Class       -> construit une valeur classe
  Import      -> charge/évalue module puis lie membres publics
  Return      -> transporte un transfert de retour`,
        },
        {
          id: "vm",
          title: "Backend VM",
          body: [
            "Le backend VM compile un programme parsé au lieu d’exécuter l’AST directement. Il abaisse le programme en LIR, émet du bytecode, trouve `principal`, puis exécute le module bytecode obtenu.",
            "Le chemin VM sert à rendre l’exécution plus explicite. Le LIR donne aux mainteneurs une représentation entre l’AST proche du source et le bytecode compact. Le bytecode donne ensuite à la VM un petit flux d’instructions à exécuter.",
          ],
          refs: [
            { term: "AST", description: "Le programme parsé produit par le front end." },
            { term: "LIR", description: "Une représentation abaissée où opérations et liens de modules deviennent explicites." },
            { term: "Bytecode", description: "Le format compact d’instructions exécuté par la VM." },
            { term: "Désassemblage", description: "Une vue lisible du bytecode utilisée pour inspecter la sortie compilée." },
          ],
          code: `Compilation VM:
  Program(statements, source_path)
    -> lier module source + imports
    -> abaisser fonctions/classes/interfaces/membres en LIR
    -> localiser principal()
    -> émettre ModuleBytecode(entry_function)
    -> la VM exécute le chunk d’entrée

Inspection VM:
  Program -> LIR -> bytecode -> désassemblage`,
          note: "Pour les fonctionnalités supportées, les comportements tree-walk et VM doivent correspondre. Toute différence doit être documentée comme limite alpha ou corrigée comme bug.",
        },
        {
          id: "lir-bytecode",
          title: "Conception LIR et bytecode",
          body: [
            "Le LIR est une représentation abaissée avec opérandes explicites. Au lieu d’embarquer directement des nœuds AST, les instructions LIR référencent constantes, globals, locals, temporaires, fonctions, blocs, types, membres, captures, classes, interfaces, noms d’arguments et namespaces par indice.",
            "Le contrôle de flux LIR est structuré par blocs. Les instructions régulières font le travail à l’intérieur d’un bloc, et chaque bloc se termine par un seul terminateur : saut, branche, retour de valeur ou retour nil. Cela retire le fallthrough implicite de la forme abaissée.",
            "Le bytecode est le format compact exécuté par la VM. Il contient des opcodes pour constantes, globals, locals, captures, closures, try/throw, sauts, arithmétique, comparaisons, appels, accès membre, classes, interfaces, namespaces, collections, conversions, tests de type, assertions, erreurs de match, pop de pile et retour.",
          ],
          refs: [
            { term: "Constantes", description: "Les valeurs littérales sont stockées dans des tables et référencées par indice." },
            { term: "Locals et captures", description: "Les noms locaux à une fonction et les noms capturés sont séparés pour représenter les closures explicitement." },
            { term: "Membres", description: "Les noms de membres sont indexés pour encoder compactement get, set et call membre." },
            { term: "Emplacements source", description: "LIR et bytecode transportent des coordonnées source pour diagnostics et désassemblage." },
          ],
          code: `LirOperand:
  constant(index) | global(index) | local(index)
  temp(index) | function(index) | block(index)
  type(index) | member(index) | capture(index)
  class(index) | interface(index) | namespace(index)

LirBlock:
  instructions: LirInstruction[]
  terminator: jump | branch | return_value | return_nil

Fonction bytecode:
  name, arity, optional_params
  local_slot_count, capture_count
  constants[]
  code[]
  source_locations[]`,
        },
        {
          id: "valeurs-runtime",
          title: "Valeurs runtime",
          body: [
            "Les valeurs runtime sont la représentation commune utilisée par le code utilisateur, les modules intégrés, les fonctions natives, les instances d’objets et les deux backends d’exécution.",
            "Le modèle couvre valeurs scalaires, collections, valeurs appelables, classes, interfaces, objets de modules et `rien`. C’est pourquoi un changement de type de valeur a un impact large : affichage, égalité, vérifications de type, indexation, validation des arguments natifs et interopération VM peuvent tous être touchés.",
          ],
          refs: [
            { term: "Scalaires", description: "`Entier`, `Décimal`, `Logique`, `Texte`, `Symbole` et `rien`." },
            { term: "Collections", description: "`Liste`, `ListeFixe`, `Dictionnaire` et `Ensemble`." },
            { term: "Appelables", description: "Fonctions utilisateur et fonctions natives partagent la même frontière d’appel." },
            { term: "Objets", description: "Instances de classes et objets natifs de modules exposent champs et membres appelables." },
          ],
          code: `Value {
  type:
    ENTIER | DECIMAL | LOGIQUE | SYMBOLE | TEXTE
    LISTE | LISTE_FIXE | DICTIONNAIRE | ENSEMBLE
    OBJET | FONCTION | CLASSE | INTERFACE | RIEN

  data:
    payload scalaire
    stockage collection partagé
    stockage objet/fonction/classe/interface partagé
}

stockage collection:
  ListeData: Value[]
  ListeFixeData: Value[]
  DictData: [Value, Value][]
  EnsembleData: Value[]`,
        },
        {
          id: "objets-classes-interfaces",
          title: "Objets, classes et interfaces",
          body: [
            "Les objets exposent champs et méthodes via le système de valeurs runtime. Les instances de classes utilisateur et les objets natifs fournis par les modules utilisent le même modèle général d’accès membre : une valeur peut avoir des champs nommés, et certains champs sont appelables.",
            "Les classes définissent construction, champs, méthodes, héritage et visibilité. Les interfaces définissent les formes de méthodes attendues. Le runtime vérifie ces relations aux endroits où les valeurs traversent des frontières déclarées.",
          ],
          bullets: [
            "L’accès champ et l’appel de méthode doivent rester cohérents pour les objets utilisateur et les objets natifs de modules.",
            "Les membres privés doivent rester des détails internes de l’objet ou de la classe.",
            "Les vérifications d’interface doivent signaler les comportements manquants ou incompatibles via erreurs normales.",
            "Les objets natifs doivent exposer de l’état sous forme de valeurs Lumière ordinaires au lieu de laisser fuir des structures de l’hôte.",
          ],
          code: `LumiereObject:
  fields: Map<string, Value>
  native_state?: état hôte partagé

LumiereClass:
  name
  fields
  methods
  parent?
  implemented_interfaces

LumiereFunction:
  name
  params
  closure?
  body?           // fonction utilisateur
  native_handler? // fonction standard native`,
        },
        {
          id: "enregistrement-stdlib",
          title: "Enregistrement de la bibliothèque standard",
          body: [
            "Les modules intégrés sont enregistrés par nom et exposent des membres publics avec le même modèle de membres de module que les imports Lumière. Une fonction native est enveloppée comme valeur fonction Lumière avant d’être stockée comme membre public.",
            "Cela garde une surface d’import cohérente. `importer Maths`, `importer Fichier` et `importer LumiNet` exposent modules, valeurs et fonctions via le même mécanisme runtime au lieu d’avoir une convention d’appel séparée pour chaque bibliothèque.",
          ],
          refs: [
            { term: "Valeurs publiques", description: "Constantes et objets de modules sont stockés comme membres publics." },
            { term: "Fonctions publiques", description: "Les handlers natifs sont enveloppés en valeurs fonction Lumière appelables." },
            { term: "Validation", description: "Les helpers vérifient le nombre et le type des arguments avant le comportement natif." },
            { term: "Erreurs runtime", description: "Arguments invalides et échecs de l’hôte remontent par le chemin d’erreur runtime." },
          ],
          code: `Module {
  name: string
  members: Map<string, Value>
  public_members: Set<string>
  state?: RuntimeModuleState
}

register_builtin_module(module):
  match module.name
    "Maths"     -> lie constantes/fonctions
    "Texte"     -> lie fonctions + resolver membres Texte
    "Chemin"    -> lie helpers de chemins purs
    "Fichier"   -> lie effets filesystem
    "Temps"     -> lie constructeurs Instant/Durée
    "Aléatoire" -> lie fonctions du générateur
    "LumiNet"   -> lie objets de capacités
    "LumiTest"  -> lie API de test avec état`,
        },
        {
          id: "frontiere-native",
          title: "Frontière native",
          body: [
            "Les fonctions natives de bibliothèque standard reçoivent des valeurs runtime, les valident, exécutent le comportement hôte et retournent des valeurs runtime. La frontière reste volontairement étroite : des valeurs Lumière entrent, des valeurs Lumière sortent, et un usage invalide devient une erreur runtime Lumière.",
            "C’est cette frontière qui permet aux modules natifs de ressembler à des modules Lumière ordinaires. Une fonction de fichiers, un helper mathématique, une requête HTTP, une assertion de test ou un formateur de temps s’appelle toujours comme une fonction Lumière depuis le code utilisateur.",
          ],
          bullets: [
            "Valider le nombre d’arguments avant de les lire.",
            "Valider les types de valeurs avant de les convertir vers des valeurs hôte.",
            "Convertir les résultats hôte en valeurs Lumière avant de retourner.",
            "Convertir les échecs hôte en erreurs runtime avec des noms d’opérations utiles.",
            "Garder l’état natif derrière des objets Lumière lorsqu’une capacité a besoin de durée de vie, callbacks, sockets ou état serveur.",
          ],
          code: `appel fonction native:
  RuntimeArgument[] + RuntimeSite
    -> valider arité
    -> valider arguments nommés
    -> valider types Value
    -> convertir vers valeurs hôte
    -> exécuter opération hôte
    -> convertir résultat en Value
    -> annoter type résultat si utile

échec hôte:
  exception/code erreur
    -> runtime.raise_runtime_error(site, message)`,
        },
        {
          id: "stdlib-maths-texte",
          title: "Maths et Texte",
          body: [
            "`Maths` est un module numérique largement sans état. Il expose des constantes comme `pi`, `e`, `infini` et `non_nombre`, puis enveloppe des helpers pour valeur absolue, min/max, arrondis, racines, puissances, logarithmes, trigonométrie, conversion d’angles et prédicats numériques.",
            "`Texte` est partagé entre fonctions de module et comportement membre sur les valeurs texte. Il couvre taille, élagage, recherche, remplacement, séparation, jointure, répétition, casse et conversions de texte vers valeurs numériques ou logiques.",
          ],
          bullets: [
            "`Maths` valide les domaines numériques avant d’appeler les opérations mathématiques de l’hôte, par exemple racines et logarithmes.",
            "`Maths` garde les noms français et des alias communs lorsque c’est utile, comme `absolu`/`abs`, `arrondir`/`arrondi`, `sin`/`sinus`, `cos`/`cosinus` et `tan`/`tangente`.",
            "`Texte` supporte l’usage comme méthode sur une valeur texte et les helpers de module pour des opérations comme la jointure.",
            "Les conversions `Texte` échouent lorsque la chaîne complète ne peut pas être convertie vers le type demandé.",
          ],
          refs: [
            { term: "Maths", description: "Wrappers sans état autour d’opérations numériques, avec validation runtime avant l’appel aux mathématiques de l’hôte." },
            { term: "Accès membre Texte", description: "Les valeurs texte peuvent exposer du comportement via appels membres, donc `texte.elaguer()` suit le modèle normal d’accès membre Lumière." },
            { term: "Frontière Unicode", description: "Les opérations qui comptent ou indexent des caractères visibles doivent utiliser les helpers Unicode plutôt que des positions d’octets brutes." },
            { term: "Frontière de conversion", description: "Les helpers texte-vers-nombre et texte-vers-booléen retournent des valeurs Lumière typées ou échouent avec une erreur runtime." },
          ],
          code: `Maths:
  constantes module:
    pi, e, infini, non_nombre
  pattern fonction native:
    attendre nombre(s)
    valider domaine
    appeler math hôte
    retourner Entier ou Décimal

Texte:
  fonctions module:
    joindre(...)
  resolver membre:
    receiver: Texte
    member: "taille" | "elaguer" | "separer" | ...
    args -> valider -> retourner Texte/List/Entier/Logique`,
        },
        {
          id: "stdlib-chemin-fichier",
          title: "Chemin et Fichier",
          body: [
            "`Chemin` gère les chemins de façon lexicale. Il construit et normalise des chaînes de chemin, expose le séparateur de la plateforme et extrait noms, extensions, dossiers parents, chemins absolus et parties. Il ne lit pas et ne modifie pas le système de fichiers.",
            "`Fichier` donne accès au système de fichiers hôte. Il vérifie existence et type d’entrée, lit et écrit texte ou lignes, crée des dossiers, liste des dossiers, copie, déplace, supprime des fichiers, supprime des dossiers vides et peut supprimer des arborescences.",
          ],
          bullets: [
            "Gardez la construction des chemins dans `Chemin` ; gardez les effets sur le système de fichiers dans `Fichier`.",
            "`Fichier` convertit les erreurs du système de fichiers en erreurs runtime Lumière avec l’opération échouée dans le message.",
            "Les helpers de lecture retournent du texte Lumière ou des listes. Les helpers d’écriture acceptent texte ou listes Lumière et les convertissent avant de toucher l’hôte.",
            "Les opérations récursives doivent rester explicites parce qu’elles peuvent toucher beaucoup de fichiers hôte.",
          ],
          refs: [
            { term: "Chemin", description: "Manipulation pure de chemins. Le module peut être testé sans dépendre de fichiers présents." },
            { term: "Fichier", description: "Accès effectif à l’hôte. Chaque opération peut échouer à cause des permissions, chemins absents, encodage ou comportement du système." },
            { term: "Séparation", description: "Planification de chemins et mutation du système de fichiers restent séparées pour valider les chemins avant les effets." },
            { term: "Traduction d’erreurs", description: "Les erreurs du système de fichiers hôte deviennent des erreurs runtime Lumière avec messages propres à l’opération." },
          ],
          code: `opération Chemin:
  entrée Texte/List
    -> manipulation chemin hôte
    -> sortie Texte/List
    -> aucune mutation filesystem

opération Fichier:
  chemin Texte
    -> valider état fichier/dossier si nécessaire
    -> effectuer opération filesystem hôte
    -> retourner Logique | Texte | Liste[Texte] | rien
    -> traduire échec filesystem en erreur runtime`,
        },
        {
          id: "stdlib-temps-aleatoire",
          title: "Temps et Aléatoire",
          body: [
            "`Temps` modélise le temps avec des objets runtime. Les instants stockent des horodatages en millisecondes et exposent accesseurs date/heure, formatage, conversion en horodatage, addition et soustraction. Les durées stockent des quantités de millisecondes et exposent des conversions d’unités.",
            "`Aléatoire` enveloppe la génération aléatoire derrière un générateur de module. Il expose graine, plages d’entiers, plages de décimaux, choix aléatoire, mélange en place et échantillonnage sans remplacement.",
          ],
          bullets: [
            "`Temps` sépare points dans le temps et quantités de temps pour distinguer `Instant` et `Durée`.",
            "`Temps` formate avec des tokens explicites comme `AAAA`, `MM`, `JJ`, `HH`, `mm`, `ss` et `SSS`.",
            "`Aléatoire.graine` rend exemples et tests répétables.",
            "`Aléatoire.échantillon` valide que la taille demandée correspond à la liste d’entrée.",
          ],
          refs: [
            { term: "Instant", description: "Objet runtime pour un point dans le temps, basé sur un horodatage millisecondes et exposé via méthodes date/heure." },
            { term: "Durée", description: "Objet runtime pour une quantité de temps, basée sur des millisecondes et exposée via méthodes de conversion d’unités." },
            { term: "Formatage", description: "Utilise des tokens explicites plutôt qu’une détection de locale, ce qui garde la sortie déterministe." },
            { term: "État aléatoire", description: "Le générateur de module supporte une graine déterministe pour tests et exemples." },
          ],
          code: `Objet Instant:
  __type: "Instant"
  __millis: Entier
  méthodes:
    année(), mois(), jour(), heure()
    formater(format)
    ajouter(Durée), soustraire(...)

Objet Durée:
  __type: "Durée"
  __millis: Entier
  méthodes:
    en_millisecondes()
    en_secondes()
    en_minutes()
    en_heures()

Aléatoire:
  état générateur module
  graine(n) réinitialise la séquence déterministe`,
        },
        {
          id: "luminet-module",
          title: "Structure du module LumiNet",
          body: [
            "`LumiNet` est enregistré comme module de bibliothèque standard, mais sa surface publique est un ensemble d’objets de capacités plutôt qu’une liste plate de fonctions. Les membres exportés sont `Adresse`, `DNS`, `TCP`, `UDP`, `HTTP` et `Canal`.",
            "Chaque capacité est un objet runtime typé caché. Les méthodes sont stockées comme valeurs fonction runtime sur cet objet. Les valeurs avec état, comme connexions et serveurs, attachent un état natif derrière l’objet Lumière tout en exposant seulement des champs et méthodes Lumière au code utilisateur.",
            "Quand le réseau n’est pas activé dans un build, le module expose une fonction `indisponible` qui lance une erreur runtime Lumière. Le non-support réseau reste donc explicite au runtime au lieu d’échouer à l’import avec une erreur hôte sans rapport.",
          ],
          refs: [
            { term: "`Adresse`", description: "Parsing d’adresses, valeurs hôte/port, vérifications IPv4/IPv6, vérifications locales et découverte d’adresse locale." },
            { term: "`DNS`", description: "Résolution directe, résolution de toutes les adresses avec filtrage des doublons et résolution inverse." },
            { term: "`TCP`", description: "Connexions client et serveurs TCP bloquants qui appellent des callbacks Lumière pour les clients acceptés." },
            { term: "`UDP`", description: "Sockets datagrammes liées avec envoi, réception, paquets d’octets, broadcast, fermeture et délais." },
            { term: "`HTTP`", description: "Requêtes client HTTP clair plus serveur HTTP avec middleware, routes, objets réponse et routes d’upgrade Canal." },
            { term: "`Canal`", description: "Canaux de style WebSocket client/serveur avec callbacks d’événements et flux de messages par frames." },
          ],
          code: `Module LumiNet:
  public HTTP    -> objet "LumiNet.HTTP"
  public Canal   -> objet "LumiNet.Canal"
  public TCP     -> objet "LumiNet.TCP"
  public UDP     -> objet "LumiNet.UDP"
  public DNS     -> objet "LumiNet.DNS"
  public Adresse -> objet "LumiNet.Adresse"

objet capacité:
  fields[method_name] = fonction Lumière native
  fields["__type"] = marqueur de type caché`,
        },
        {
          id: "luminet-etat-natif",
          title: "Modèle d’état natif LumiNet",
          body: [
            "Toute valeur réseau longue durée est représentée comme objet Lumière avec marqueur de type caché et état natif attaché. L’objet visible contient des champs ordinaires comme `adresse`, `port`, `statut`, `corps`, ou des méthodes appelables. L’état natif garde handles de sockets, flags stopped/closed, callbacks, listes de routes, octets en attente ou en-têtes de réponse.",
            "Cette conception garde l’objet public petit tout en permettant au côté hôte de gérer les ressources. Fermer une connexion ou arrêter un serveur met à jour l’état natif et ferme le handle socket. Les destructeurs ferment aussi les handles pour éviter les sockets abandonnées.",
          ],
          refs: [
            { term: "État de connexion", description: "Les connexions TCP suivent un handle socket et un flag closed." },
            { term: "État serveur", description: "Les serveurs TCP et HTTP suivent une socket d’écoute, un flag stopped et les callbacks/routes enregistrés." },
            { term: "État UDP", description: "Les sockets UDP suivent la socket liée, le port lié et le flag closed." },
            { term: "État Canal", description: "Les clients Canal suivent handle socket, état ouvert/fermé, octets de frame en attente, côté de connexion, adresse distante et callbacks d’événements." },
            { term: "État réponse", description: "Les writers de réponse HTTP suivent la socket client, si une réponse a déjà été envoyée et les en-têtes en attente." },
          ],
          code: `objet réseau caché:
  fields:
    "__type": Texte
    champs publics
    méthodes publiques
  native_state:
    pointeur état hôte partagé

TcpConnectionState:
  fd: handle socket
  closed: Logique

HttpServerState:
  fd: socket écoute
  stopped: Logique
  middleware: Function[]
  routes: { method, pattern, handler }[]
  canal_routes: { pattern, handler }[]`,
          note: "La frontière importante : l’état natif ne devient jamais une valeur visible par l’utilisateur. Le code utilisateur voit des objets et fonctions Lumière.",
        },
        {
          id: "luminet-adresse-dns",
          title: "LumiNet Adresse et DNS",
          body: [
            "`Adresse` gère validation et construction de valeurs hôte/port. `analyser` parse du texte `hôte:port` et retourne un objet adresse typé. Les prédicats vérifient IPv4, IPv6, validité générale et texte local/privé. `locale` demande une adresse locale à l’hôte et retombe sur loopback quand la résolution ne donne pas d’adresse utilisable.",
            "`DNS` utilise directement le résolveur de l’hôte. `résoudre` retourne la première adresse utilisable. `résoudre_tous` retourne une `Liste[Texte]` et filtre les doublons. `résoudre_inverse` valide que l’entrée est IPv4 ou IPv6 avant de demander une résolution inverse.",
          ],
          bullets: [
            "Les objets adresse exposent `hôte`, `port` et `en_texte` au lieu d’exposer les structures du résolveur hôte.",
            "Les échecs DNS deviennent des erreurs runtime Lumière avec le nom de l’opération échouée.",
            "L’API sépare validation syntaxique d’adresse et résolution DNS. `Adresse.est_valide` ne demande pas d’accès réseau.",
          ],
          code: `Adresse.analyser("localhost:8080"):
  parser hôte + port
  valider port
  retourner objet {
    __type: "Adresse"
    hôte: "localhost"
    port: 8080
    en_texte(): "localhost:8080"
  }

DNS.résoudre_tous(host):
  getaddrinfo(host)
  pour chaque résultat:
    convertir sockaddr -> texte
    ignorer doublons
  retourner Liste[Texte]`,
        },
        {
          id: "luminet-tcp-udp",
          title: "LumiNet TCP et UDP",
          body: [
            "`TCP.connecter` résout l’hôte et essaie les adresses candidates jusqu’à ce qu’une socket se connecte. Il accepte optionnellement une `Durée` via `délai`, applique ce délai à la socket, puis retourne un objet `ConnexionTCP`.",
            "`ConnexionTCP` expose métadonnées de connexion plus `est_connecté`, `fermer`, `définir_délai`, `écrire`, `écrire_octets`, `lire`, `lire_ligne` et `lire_octets`. Les écritures texte envoient des octets UTF-8. Les écritures et lectures d’octets convertissent entre valeurs Lumière `Liste[Entier]` et buffers hôte.",
            "`TCP.Serveur` retourne un objet serveur. L’utilisateur enregistre `quand_connexion`, puis appelle `écouter`. La boucle d’écoute accepte les clients, enveloppe chaque socket acceptée en `ConnexionTCP` et appelle le callback Lumière avec cet objet. `arrêter` active le flag stopped, ferme la socket d’écoute et casse la boucle d’acceptation.",
            "`UDP.ouvrir` lie une socket datagramme à un port demandé ou au port `0` pour un port éphémère. L’objet `SocketUDP` retourné supporte datagrammes texte et octets, broadcast, réception, configuration de délai et fermeture.",
          ],
          refs: [
            { term: "Durée de vie client TCP", description: "L’objet connexion possède un handle socket natif jusqu’à `fermer`, fermeture distante, erreur ou destruction de l’objet." },
            { term: "Durée de vie serveur TCP", description: "L’objet serveur possède la socket d’écoute et les clients acceptés sont enveloppés dans des objets connexion séparés." },
            { term: "Objets paquet UDP", description: "Les opérations de réception retournent des objets contenant adresse émettrice, port émetteur et données texte ou liste d’octets." },
            { term: "Délais", description: "Les délais sont acceptés comme objets `Durée` et traduits en options de socket lecture/écriture." },
          ],
          code: `TCP.connecter(host, port, délai?):
  résoudre host
  pour chaque adresse candidate:
    ouvrir socket
    appliquer délai si fourni
    connecter
    si succès -> ConnexionTCP(state)
  si aucune connexion -> erreur réseau runtime

ServeurTCP.écouter(host, port):
  bind + listen
  tant que non stopped:
    accepter socket client
    envelopper en ConnexionTCP
    runtime.call(on_connection, client)

SocketUDP.recevoir():
  recvfrom
  retourner { données, adresse, port }`,
        },
        {
          id: "luminet-http",
          title: "LumiNet HTTP",
          body: [
            "Le client HTTP supporte les URL `http` en clair. Les helpers de requête parsèrent l’URL, résolvent l’hôte, ouvrent une socket TCP, appliquent un délai optionnel, écrivent une requête HTTP/1.1, lisent la réponse complète, parsèrent statut et en-têtes, puis retournent un objet `RéponseHTTP`.",
            "`RéponseHTTP` contient `statut`, `corps`, `succès`, `entête(nom)` et `entêtes()`. Les en-têtes sont conservés comme paires et convertis en dictionnaire Lumière seulement lorsque le code utilisateur demande tous les en-têtes.",
            "`HTTP.Serveur` crée un objet `ServeurHTTP` avec état de routes. Il stocke callbacks middleware, routes par méthode et routes d’upgrade Canal. `écouter` lie une socket, accepte les clients, parse chaque requête HTTP, construit `RequêteHTTP` et `RéponseServeurHTTP`, puis exécute les middlewares avant la route correspondante.",
            "Le writer de réponse impose un seul envoi. Il valide noms et valeurs d’en-têtes, empêche le code utilisateur de surcharger `Content-Length` et `Connection`, remplit type de contenu et longueur par défaut si nécessaire, puis ferme la connexion après la réponse.",
          ],
          refs: [
            { term: "Méthodes client", description: "`requête`, `obtenir`, `créer`, `modifier` et `supprimer` partagent le même constructeur de requêtes." },
            { term: "Arguments nommés", description: "Les requêtes HTTP acceptent `entêtes`/`entetes`, `corps`, `type` et `délai`/`delai`." },
            { term: "Objet requête", description: "`RequêteHTTP` expose méthode, chemin, corps, paramètres de route, paramètres de query, lookup d’un en-tête et tous les en-têtes." },
            { term: "Writer réponse", description: "`RéponseServeurHTTP` expose `définir_entête`, `envoyer`, `envoyer_json`, `envoyer_fichier` et `rediriger`." },
          ],
          code: `Client HTTP:
  parser URL
  résoudre hôte
  connecter TCP
  écrire requête HTTP/1.1
  lire réponse complète
  parser status line + headers
  retourner RéponseHTTP {
    statut, corps, succès
    entête(name)
    entêtes()
  }

Requête serveur HTTP:
  accepter socket
  parser requête brute
  matcher chaîne middleware
  matcher route par méthode + pattern
  construire RequêteHTTP + RéponseServeurHTTP
  appeler handler(request, response)
  imposer une seule réponse par socket`,
        },
        {
          id: "luminet-canal",
          title: "LumiNet Canal",
          body: [
            "`Canal` est la couche de style WebSocket. Le chemin client parse une URL HTTP, ouvre une socket TCP, envoie une requête d’upgrade, valide la réponse `101 Switching Protocols`, vérifie la clé d’acceptation, puis retourne un objet client Canal.",
            "Le chemin serveur s’intègre à `HTTP.Serveur`. Une route Canal enregistre un pattern et un callback. Pendant le traitement HTTP, une route Canal correspondante vérifie les en-têtes d’upgrade, envoie la réponse de handshake WebSocket, enveloppe la socket client en objet client Canal, appelle le callback Lumière enregistré, puis entre dans la boucle de frames Canal.",
            "Les clients Canal exposent des méthodes d’enregistrement de callbacks comme `quand_ouvert`, `quand_message`, `quand_fermé` et `quand_erreur`, plus `envoyer`, `envoyer_octets`, `fermer`, `est_connecté` et `attendre`. La boucle lit les frames, bufferise les octets en attente, convertit les payloads texte et octets en valeurs Lumière et appelle les callbacks enregistrés via le runtime.",
          ],
          bullets: [
            "Le handshake utilise l’algorithme de clé d’acceptation WebSocket basé sur SHA-1 et Base64.",
            "Les objets client gardent des octets en attente parce qu’une réponse d’upgrade HTTP peut contenir des octets après le bloc d’en-têtes.",
            "Les routes serveur utilisent le même mécanisme de correspondance de patterns que les routes HTTP.",
            "Les callbacks sont stockés comme valeurs fonction Lumière dans l’état natif, puis invoqués avec des arguments runtime lorsque frames ou événements de cycle de vie arrivent.",
          ],
          code: `Connexion client Canal:
  parser URL
  connecter TCP
  envoyer requête HTTP Upgrade
  lire headers réponse
  exiger status 101
  vérifier Upgrade + Connection + Sec-WebSocket-Accept
  retourner CanalClient(state)

Route serveur Canal:
  route HTTP matche chemin
  valider requête Upgrade
  envoyer Switching Protocols
  envelopper socket en CanalClient
  runtime.call(route_callback, canal_client)
  lancer boucle frames

boucle frames:
  lire frame
  décoder texte ou octets
  appeler callback on_message
  callbacks close/error mettent à jour l’état`,
        },
        {
          id: "stdlib-lumitest",
          title: "LumiTest",
          body: [
            "`LumiTest` est implémenté comme module standard avec état parce que les tests ont besoin d’un état de run partagé : filtre sélectionné, verbosité, arrêt au premier échec, pile de groupes, hooks, résultats collectés et compte d’échecs.",
            "Le module expose déclaration de tests, groupes, hooks et assertions comme fonctions publiques. Les assertions lancent des échecs de test contrôlés, et le runner les enregistre comme résultats au lieu de traiter chaque assertion échouée comme un crash non structuré.",
          ],
          refs: [
            { term: "Structure", description: "`test`, `groupe`, `avant_tout`, `avant_chaque`, `après_chaque` et `après_tout`." },
            { term: "Assertions", description: "`vérifier`, `vérifier_égal`, `vérifier_différent`, `vérifier_lance`, `vérifier_contient` et `vérifier_approx`." },
            { term: "État", description: "Groupes, hooks, options, résumés et état d’arrêt vivent dans l’état du module pendant un run de tests." },
            { term: "Échec contrôlé", description: "Les échecs d’assertion sont capturés comme résultats de test pour que le runner continue sauf si arrêt au premier échec est activé." },
            { term: "Hooks", description: "Les hooks before/after sont stockés avec le contexte de groupe pour exécuter setup et cleanup aux bonnes frontières de test." },
          ],
          code: `LumiTestModuleState:
  options:
    verbose
    stop_on_failure
    filter
  summary:
    results[]
    executed
    failed
  group_stack: string[]
  group_contexts:
    name, full_name
    before_all_hooks[]
    before_each_hooks[]
    after_each_hooks[]
    after_all_hooks[]
    before_all_ran
    has_executed_test
  abort_requested

exécution test:
  enregistrer groupe/test
  exécuter before hooks
  exécuter callback Lumière
  convertir échec assertion -> résultat
  exécuter after hooks
  mettre à jour summary`,
        },
        {
          id: "checklist-mainteneur",
          title: "Checklist mainteneur",
          body: [
            "Un changement est complet seulement lorsque les couches touchées s’accordent. Syntaxe, diagnostics, exécution, lowering VM, surface de bibliothèque standard, tests et documentation ne doivent pas être modifiés séparément lorsque le comportement traverse ces frontières.",
          ],
          bullets: [
            "Nouvelle syntaxe : définir tokens, forme AST, diagnostics parser, comportement tree-walk, comportement VM si supporté, tests et docs.",
            "Nouvelle valeur runtime : définir affichage, égalité, vérifications de type, comportement de collection, gestion par fonction native et comportement backend.",
            "Nouvelle API standard : définir nom public, validation d’arguments, valeurs retournées, messages d’erreur, effets de bord, tests et exemples.",
            "Nouveau comportement de commande : définir sortie terminal, code de sortie, forme JSON si applicable, diagnostics et tests.",
            "Travail VM : comparer le comportement supporté avec l’exécution tree-walk et documenter toute limite alpha.",
          ],
        },
      ],
    },
    download: {
      title: "Guide d’installation et de compilation",
      intro: "Choisissez un artefact de version quand votre plateforme est prise en charge. Compilez les sources lorsqu’aucun artefact ne correspond à votre système ou processeur.",
      sections: [
        {
          id: "choisir-artefact",
          title: "Choisir l’artefact adapté à votre machine",
          body: [
            "Avant de télécharger, vérifiez votre système d’exploitation et votre architecture processeur. Le nom de l’artefact compte : un paquet x86-64 ne s’installe pas correctement sur un système ARM.",
          ],
          bullets: [
            "Linux x86-64 utilise l’artefact linux-x86_64.",
            "macOS Intel utilise le paquet macos-x86_64.",
            "macOS Apple Silicon utilise le paquet macos-arm64.",
            "Windows x86-64 utilise le MSI windows-x86_64.",
            "Raspberry Pi et les autres systèmes Linux ARM doivent compiler les sources.",
          ],
          code: `uname -s
uname -m`,
        },
        {
          id: "script-installation",
          title: "Installer sur macOS ou Linux avec le script",
          body: [
            "Le script d’installation détecte les systèmes et architectures pris en charge. Il installe l’exécutable lumiere dans ~/.local/bin par défaut.",
            "Si votre shell ne trouve pas lumiere après installation, ajoutez ~/.local/bin au PATH puis ouvrez un nouveau terminal.",
          ],
          code: `curl -fsSL https://raw.githubusercontent.com/SY-Technologies/lumiere/main/scripts/install.sh | sh

export PATH="$HOME/.local/bin:$PATH"
lumiere --version`,
        },
        {
          id: "windows",
          title: "Installer sur Windows",
          body: [
            "Le MSI cible Windows x86-64 et ajoute le dossier d’installation au PATH système. Ouvrez un nouveau terminal après l’installation.",
            "L’installateur PowerShell est par utilisateur. Il vérifie directement l’exécutable et affiche le dossier d’installation, mais il ne modifie pas encore le PATH.",
          ],
          code: `lumiere --version

irm https://raw.githubusercontent.com/SY-Technologies/lumiere/main/scripts/install.ps1 | iex`,
        },
        {
          id: "compiler-sources",
          title: "Compiler les sources",
          body: [
            "La compilation des sources est la voie prise en charge pour les plateformes sans artefact de version. Elle crée un exécutable natif pour la machine qui compile.",
            "Vous avez besoin de Git, CMake 3.23 ou plus récent et d’un compilateur C++20.",
          ],
          code: `git clone https://github.com/SY-Technologies/lumiere.git
cd lumiere
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release -DBUILD_TESTING=ON
cmake --build build --parallel 2
ctest --test-dir build --output-on-failure
sudo cmake --install build
lumiere --version`,
          note: "Utilisez cmake --build build --parallel 1 sur Raspberry Pi et les machines avec peu de mémoire.",
        },
        {
          id: "dependances-compilation",
          title: "Installer les dépendances de compilation",
          body: [
            "Les compilations Linux demandent Git, CMake, un compilateur C++20 et les outils de build habituels. Les compilations macOS demandent les outils en ligne de commande d’Apple et CMake.",
            "Raspberry Pi et les machines modestes devraient compiler avec un seul job parallèle. L’optimisation Release peut utiliser assez de mémoire pour rendre les builds parallèles plus lents, pas plus rapides.",
          ],
          code: `sudo apt update
sudo apt install -y build-essential cmake git

xcode-select --install
brew install cmake

cmake --build build --parallel 1`,
          note: "L’installation CMake par défaut place généralement l’exécutable dans /usr/local/bin/lumiere.",
        },
        {
          id: "installer-version-precise",
          title: "Installer ou recompiler une version précise",
          body: [
            "Utilisez la dernière version pour une installation normale. Épinglez une version lorsque vous avez besoin d’un environnement reproductible ou lorsque des exemples dépendent d’une version précise.",
            "Pour compiler les sources, récupérez les tags, sélectionnez le tag de version, puis recompilez et relancez les tests avant installation.",
          ],
          code: `curl -fsSL https://raw.githubusercontent.com/SY-Technologies/lumiere/main/scripts/install.sh |
  sh -s -- --version vVERSION

git fetch --tags
git checkout vVERSION
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release -DBUILD_TESTING=ON
cmake --build build --parallel 2
ctest --test-dir build --output-on-failure
sudo cmake --install build`,
        },
        {
          id: "verification",
          title: "Vérifier l’installation",
          body: [
            "Après installation, créez un petit programme et lancez-le avec la commande normale. Si le programme affiche le texte attendu, l’exécutable est disponible et fonctionne.",
          ],
          code: `fonction principal() {
    afficher("Bonjour depuis Lumiere")
}

lumiere bonjour.lum
lumiere --version`,
        },
        {
          id: "mise-a-jour",
          title: "Mettre à jour avec la même méthode",
          body: [
            "Utilisez la même méthode que celle qui a installé l’exécutable actuel. Les mises à jour remplacent le binaire Lumière ; elles ne modifient pas vos fichiers source ni vos projets.",
            "Si l’ancienne version apparaît encore après mise à jour, la machine peut contenir plusieurs exécutables lumiere dans le PATH.",
          ],
          code: `command -v lumiere
lumiere --version
which -a lumiere`,
        },
        {
          id: "depannage-installation",
          title: "Dépanner une installation",
          body: [
            "La plupart des échecs d’installation viennent d’un mauvais couple artefact/architecture, d’un problème de PATH ou d’outils de compilation manquants.",
            "Pour signaler un problème d’installation, indiquez le système d’exploitation, l’architecture processeur, l’artefact choisi, la commande lancée et la sortie d’erreur complète. Sans ces éléments, l’échec est rarement reproductible.",
          ],
          refs: [
            { term: "Architecture Linux", description: "Lancez uname -m. x86_64 peut utiliser les artefacts linux-x86_64. aarch64 ou arm64 doit compiler les sources." },
            { term: "Architecture du paquet Debian", description: "Lancez dpkg --print-architecture. Le DEB publié demande amd64." },
            { term: "Architecture macOS", description: "Utilisez macos-x86_64 pour Intel et macos-arm64 pour Apple Silicon." },
            { term: "Architecture Windows", description: "Le MSI cible Windows x86-64. Ouvrez un nouveau terminal après installation pour voir les changements de PATH." },
            { term: "Installateur PowerShell", description: "Il vérifie l’exécutable et affiche son dossier d’installation, mais il ne modifie pas encore le PATH." },
            { term: "Installations multiples", description: "Utilisez command -v lumiere et which -a lumiere pour voir quel exécutable votre shell lance." },
          ],
        },
      ],
    },
  },
};
