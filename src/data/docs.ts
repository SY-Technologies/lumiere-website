import type { Locale } from "./site";
import type { Section } from "./pages";

export interface DocsSection {
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
  refs?: { term: string; description: string }[];
  code?: string;
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
          note: "If the terminal says it cannot find lumiere, close the terminal, open a new one, and try again. If it still fails, return to the install guide and check the PATH instructions for your platform.",
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
          note: "Save the file, then run it with `lumiere bonjour.lum` in the terminal.",
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
          note: "42 is an Entier, 3.14 is a Décimal, text is Texte, and `vrai`/`faux` are Booléen values.",
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
          note: "Choose names that describe what the value means. `nom` is clearer than `x`.",
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
          note: "Read saluer(nom: Texte) as: saluer needs one Texte value named nom.",
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
          note: "`-> Entier` means this function promises to return an Entier. If it returns the wrong kind of value, Lumière reports an error.",
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
        },
        {
          id: "variables-and-types",
          title: "Add types when you want clearer rules",
          body: [
            "A type says what kind of value is allowed. Entier means whole number, Texte means text, and Booléen means true-or-false.",
            "Types help Lumière catch mistakes. If a function expects a number but receives text, Lumière can report the problem instead of continuing with the wrong value.",
          ],
          bullets: [
            "Common scalar types include Entier, Décimal, Booléen, Texte, Rien, and Universel.",
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
          title: "Collections are typed at the edges",
          body: [
            "Lumière supports lists, fixed lists, dictionaries, and sets. Lists work well for ordered values; dictionaries work well when each value should be found by a key.",
            "When a collection has a stated type, values added to it must match that type.",
          ],
          bullets: [
            "Liste and ListeFixe can be iterated with `pour chaque`.",
            "Liste, ListeFixe, Dictionnaire, and Texte support indexed reads.",
            "Liste and ListeFixe support indexed mutation.",
            "Dictionnaire keys and values are checked when a typed dictionary is mutated.",
          ],
          code: `fonction totaliser(nombres: Liste[Entier]) -> Entier {
    soit total: Entier = 0

    pour chaque nombre dans nombres {
        total = total + nombre
    }

    retourne total
}`,
        },
        {
          id: "control-flow",
          title: "Control flow uses French keywords, familiar structure",
          body: [
            "Lumière supports conditional blocks, while loops, foreach loops, loop control, returns, thrown values, try/catch/finally, and `agir selon`.",
            "`agir selon` is useful when one value needs to be handled by several possible branches. The first matching branch runs; use `sinon` for the fallback case.",
          ],
          bullets: [
            "Supported patterns include exact values, `rien`, and typed names such as `n: Entier`.",
            "A typed name creates a value that can be used inside the matching branch.",
            "Use `sinon` when every possible value should be handled.",
          ],
          code: `fonction etiquette(tags: Liste[Texte]) -> Texte {
    agir selon tags.taille() {
        0 -> {
            retourne "vide"
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
          note: "This example uses two files. Salutations.lum defines the public function; programme.lum imports and uses it.",
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
        },
        {
          id: "objects",
          title: "Classes, inheritance, and interfaces",
          body: [
            "Lumière supports class declarations, object construction, fields, methods, inheritance, and interfaces.",
            "Use `ici` for the current receiver and `parent` for parent-method dispatch. A class can declare that it `réalise` one or more interfaces.",
          ],
          bullets: [
            "`privé` is supported on class fields, not on top-level declarations.",
            "`remplace` can be used for methods that override inherited behavior.",
            "Interfaces describe functions a class is expected to provide.",
          ],
          code: `interface Presentable {
    fonction presenter()
}

classe Rapport réalise Presentable {
    titre: Texte

    fonction presenter() {
        retourne "rapport:" + ici.titre
    }
}`,
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
        },
        {
          id: "testing-with-lumitest",
          title: "Testing with LumiTest",
          body: [
            "LumiTest is the built-in test module. Test files import LumiTest explicitly, then declare tests with LumiTest.test or grouped tests with LumiTest.groupe.",
            "Hooks run inside groups. `avant_tout` and `après_tout` run once for a group that actually executes tests. `avant_chaque` and `après_chaque` wrap each test in scope, including nested groups.",
          ],
          refs: [
            { term: "LumiTest.test(name, function)", description: "Declare one test case." },
            { term: "LumiTest.groupe(name, function)", description: "Group related tests and create a nested name such as Parent > Child > case." },
            { term: "LumiTest.avant_tout(function)", description: "Register a before-all hook for the current group." },
            { term: "LumiTest.avant_chaque(function)", description: "Register a before-each hook for the current group." },
            { term: "LumiTest.après_chaque(function)", description: "Register an after-each hook for the current group." },
            { term: "LumiTest.après_tout(function)", description: "Register an after-all hook for the current group." },
            { term: "LumiTest.vérifier(value, message?)", description: "Passes when the value is neither rien nor false." },
            { term: "LumiTest.vérifier_égal(expected, received, message?)", description: "Compare two values with Lumière equality." },
            { term: "LumiTest.vérifier_différent(a, b, message?)", description: "Passes when two values are not equal." },
            { term: "LumiTest.vérifier_lance(function, message?)", description: "Passes when the function raises an error." },
            { term: "LumiTest.vérifier_contient(container, element, message?)", description: "Checks containment for text, lists, sets, and dictionaries." },
            { term: "LumiTest.vérifier_approx(expected, received, tolerance, message?)", description: "Compare numeric values with an absolute tolerance." },
          ],
          code: `importer LumiTest

fonction additionner(a: Entier, b: Entier) -> Entier {
    retourne a + b
}

LumiTest.groupe("Calculs", fonction() {
    LumiTest.test("addition", fonction() {
        LumiTest.vérifier_égal(5, additionner(2, 3))
    })

    LumiTest.test("erreur attendue", fonction() {
        LumiTest.vérifier_lance(fonction() {
            lancer "échec volontaire"
        })
    })
})`,
          note: "The context-object form is also supported: LumiTest.groupe(\"Nom\", fonction(t: Universel) { t.test(\"cas\", fonction(t: Universel) { t.vérifier(vrai) }) }).",
        },
        {
          id: "stdlib-in-practice",
          title: "Using the built-in modules",
          body: [
            "Built-in modules are imported like source modules. Use them for focused tasks: Maths for numeric work, Texte for text helpers, Chemin for lexical paths, Fichier for filesystem state, Temps for time values, and Aléatoire for random values.",
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
          note: "Fichier operations use the host filesystem. Keep examples explicit about paths so readers understand what will be created, read, or removed.",
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
    architecture: {
      title: "Architecture guide",
      intro: "This page explains how Lumière’s language, command line, modules, standard library, tests, and errors fit together in the current alpha.",
      sections: [
        {
          id: "execution-path",
          title: "How programs run",
          body: [
            "The normal way to run a program is to pass a .lum file to the lumiere command.",
            "Running lumiere with no arguments opens an interactive shell, and lumiere tester runs LumiTest suites.",
          ],
          code: `lumiere programme.lum
lumiere
lumiere tester tests`,
          note: "A runnable program file must define principal.",
        },
        {
          id: "shell-and-test-workflow",
          title: "The shell and tests support daily work",
          body: [
            "The interactive shell is useful for trying declarations and expressions quickly. LumiTest is useful when behavior should be checked repeatedly.",
            "For most projects, the basic loop is simple: write a .lum file, run it, then add LumiTest tests for behavior that should stay stable.",
          ],
          code: `lumiere
:aide
:quitter

lumiere tester tests
lumiere tester tests --filtre "nom du test"`,
        },
        {
          id: "type-rules",
          title: "Type rules visible to users",
          body: [
            "Lumière checks the type rules that matter for normal programs: variables, function calls, return values, fields, interfaces, and typed collections.",
            "When a value does not match the type that a program declared, Lumière reports an error with source location information.",
          ],
          bullets: [
            "Variables keep the type they were declared with.",
            "Function arguments and return values are checked against annotations.",
            "Class fields are checked when objects are created or updated.",
            "Classes that declare réalise must provide the functions required by the interface.",
            "Lists and dictionaries check inserted values when they have type annotations.",
          ],
        },
        {
          id: "standard-library",
          title: "The built-in modules are small but usable",
          body: [
            "The current built-in module surface is intentionally focused. It provides the pieces needed for examples, scripts, tests, file work, paths, text, numbers, time, and randomness.",
            "Chemin is lexical and string-based. Filesystem state belongs to Fichier, not Chemin.",
          ],
          bullets: [
            "Maths provides constants, numeric functions, logarithms, trigonometry, conversions, and numeric predicates.",
            "Fichier provides file and directory helpers for checks, reads, writes, listing, copying, moving, and removal.",
            "Texte is method-first on string values, with module-level helpers for joining and conversion.",
            "Chemin handles lexical path operations such as joindre, nom, extension, dossier, parties, and normaliser.",
            "Temps provides Instant and Durée values with creation, parsing, formatting, accessors, and duration helpers.",
            "Aléatoire provides seeding, integer/decimal generation, choice, shuffle, and sampling helpers.",
          ],
        },
        {
          id: "module-reference",
          title: "Built-in module reference",
          body: [
            "This is the public module surface available in the current alpha.",
          ],
          refs: [
            { term: "Maths", description: "pi, e, infini, non_nombre, absolu, arrondir, plancher, plafond, tronquer, racine, racine_n, puissance, min, max, log, log10, log2, sin, cos, tan, asin, acos, atan, atan2, degres_vers_radians, radians_vers_degres, est_non_nombre, est_infini, est_pair, est_impair." },
            { term: "Fichier", description: "File and directory helpers: existe, lire_texte, est_fichier, est_dossier, taille, modifie_le, lire_lignes, ecrire_texte, ajouter_texte, ecrire_lignes, creer_dossiers, lister, lister_recursif, copier, deplacer, supprimer, supprimer_dossier, and supprimer_arbre." },
            { term: "Texte", description: "Text values expose methods such as taille, est_vide, contient, index_de, commence_par, finit_par, majuscules, minuscules, inverser, repeter, elaguer, sous_texte, separer, remplacer, inserer, supprimer, and conversions to number/logical values." },
            { term: "Texte module", description: "Static helpers include joindre, convertir_entier, convertir_decimal, and convertir_logique." },
            { term: "Chemin", description: "Lexical path helpers such as dossier_courant, joindre, absolu, nom, nom_sans_extension, extension, dossier, parties, est_absolu, est_relatif, and normaliser." },
            { term: "Temps", description: "Runtime-backed Instant and Durée values with maintenant, horodatage, depuis_horodatage, analyser, formatting, date/time accessors, duration constructors, entre, and attendre." },
            { term: "Aléatoire", description: "graine, entier, décimal, décimal_entre, choisir, mélanger, and échantillon." },
          ],
        },
        {
          id: "cli-reference",
          title: "CLI reference",
          body: [
            "The installed executable is named lumiere. These commands cover normal execution, testing, shell usage, and version checks.",
          ],
          refs: [
            { term: "lumiere programme.lum", description: "Run the program. The file must provide principal." },
            { term: "tester", description: "Run LumiTest suites. Supports --filtre, --verbeux, and --arrêter-sur-échec." },
            { term: "no arguments", description: "Open the persistent interactive shell." },
            { term: "--help", description: "Show command-line help." },
            { term: "--version", description: "Print the installed version." },
          ],
        },
        {
          id: "errors",
          title: "Errors point back to source",
          body: [
            "Syntax errors include source positions. Program errors include file, line, and column information, plus source snippets with caret positioning.",
            "The goal is practical: when a program fails, the report should point to the line that needs attention.",
          ],
        },
        {
          id: "current-limits",
          title: "Alpha boundaries",
          body: [
            "The current alpha is usable, but some language areas are still evolving. Treat these as practical boundaries when writing examples or teaching material.",
          ],
          bullets: [
            "agir selon supports useful branch matching, but examples should still include sinon for fallback behavior.",
            "Lists and dictionaries are the strongest collection examples today; sets should be used conservatively.",
            "Interfaces are useful for expressing expected functions, but interface examples should stay simple.",
            "Standard-library APIs may still change between alpha releases.",
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
          note: "Si le terminal dit qu’il ne trouve pas lumiere, fermez le terminal, ouvrez-en un nouveau, puis réessayez. Si le problème continue, revenez au guide d’installation et vérifiez les instructions PATH pour votre plateforme.",
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
          note: "Enregistrez le fichier, puis lancez-le avec `lumiere bonjour.lum` dans le terminal.",
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
          note: "42 est un Entier, 3.14 est un Décimal, le texte est Texte, et `vrai`/`faux` sont des valeurs Booléen.",
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
          note: "Choisissez des noms qui décrivent le sens de la valeur. `nom` est plus clair que `x`.",
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
          note: "Lisez saluer(nom: Texte) comme : saluer a besoin d’une valeur Texte nommée nom.",
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
          note: "`-> Entier` signifie que cette fonction promet de retourner un Entier. Si elle retourne un autre genre de valeur, Lumière signale une erreur.",
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
        },
        {
          id: "variables-et-types",
          title: "Ajoutez des types pour rendre les règles plus claires",
          body: [
            "Un type dit quel genre de valeur est autorisé. Entier signifie nombre entier, Texte signifie texte, et Booléen signifie vrai-ou-faux.",
            "Les types aident Lumière à trouver les erreurs. Si une fonction attend un nombre mais reçoit du texte, Lumière peut signaler le problème au lieu de continuer avec une mauvaise valeur.",
          ],
          bullets: [
            "Les types scalaires courants incluent Entier, Décimal, Booléen, Texte, Rien et Universel.",
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
          title: "Les collections sont typées aux frontières",
          body: [
            "Lumière prend en charge les listes, listes fixes, dictionnaires et ensembles. Les listes conviennent aux valeurs ordonnées ; les dictionnaires conviennent aux valeurs retrouvées par clé.",
            "Lorsqu’une collection a un type indiqué, les valeurs ajoutées doivent respecter ce type.",
          ],
          bullets: [
            "Liste et ListeFixe peuvent être parcourues avec `pour chaque`.",
            "Liste, ListeFixe, Dictionnaire et Texte acceptent les lectures par index.",
            "Liste et ListeFixe acceptent les mutations par index.",
            "Les clés et valeurs de Dictionnaire sont vérifiées lorsqu’un dictionnaire typé est modifié.",
          ],
          code: `fonction totaliser(nombres: Liste[Entier]) -> Entier {
    soit total: Entier = 0

    pour chaque nombre dans nombres {
        total = total + nombre
    }

    retourne total
}`,
        },
        {
          id: "controle-de-flux",
          title: "Le contrôle de flux utilise des mots français et une structure familière",
          body: [
            "Lumière prend en charge les conditions, boucles tant que, boucles `pour chaque`, contrôles de boucle, retours, valeurs lancées, `essayer`/`attraper`/`finalement` et `agir selon`.",
            "`agir selon` est utile quand une valeur doit être traitée par plusieurs branches possibles. La première branche qui correspond s’exécute ; utilisez `sinon` pour le cas de repli.",
          ],
          bullets: [
            "Les formes disponibles incluent les valeurs exactes, `rien` et les noms typés comme `n: Entier`.",
            "Un nom typé crée une valeur utilisable dans la branche correspondante.",
            "Utilisez `sinon` lorsque toutes les valeurs possibles doivent être traitées.",
          ],
          code: `fonction etiquette(tags: Liste[Texte]) -> Texte {
    agir selon tags.taille() {
        0 -> {
            retourne "vide"
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
        {
          id: "reference-expressions",
          title: "Référence des expressions et opérateurs",
          body: [
            "La surface d’expression reste familière : littéraux, appels, accès membre, indexation, arithmétique, comparaisons, affectation, conversions et tests de type.",
            "Les arguments nommés se lient par nom de paramètre et peuvent apparaître dans n’importe quel ordre. Les arguments nommés inconnus ou dupliqués sont rejetés.",
          ],
          refs: [
            { term: "littéraux", description: "Entiers, décimaux, booléens, texte, symboles et `rien` sont pris en charge." },
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
          note: "Cet exemple utilise deux fichiers. Salutations.lum définit la fonction publique ; programme.lum l’importe et l’utilise.",
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
        },
        {
          id: "objets",
          title: "Classes, héritage et interfaces",
          body: [
            "Lumière prend en charge les déclarations de classes, la construction d’objets, les champs, méthodes, l’héritage et les interfaces.",
            "Utilisez `ici` pour le receveur courant et `parent` pour appeler un comportement parent. Une classe peut déclarer qu’elle `réalise` une ou plusieurs interfaces.",
          ],
          bullets: [
            "`privé` est pris en charge sur les champs de classe, pas sur les déclarations de niveau fichier.",
            "`remplace` peut être utilisé pour les méthodes qui redéfinissent un comportement hérité.",
            "Les interfaces décrivent les fonctions qu’une classe doit fournir.",
          ],
          code: `interface Presentable {
    fonction presenter()
}

classe Rapport réalise Presentable {
    titre: Texte

    fonction presenter() {
        retourne "rapport:" + ici.titre
    }
}`,
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
        },
        {
          id: "tester-avec-lumitest",
          title: "Tester avec LumiTest",
          body: [
            "LumiTest est le module de test intégré. Les fichiers de test importent LumiTest explicitement, puis déclarent les cas avec LumiTest.test ou les groupes avec LumiTest.groupe.",
            "Les hooks s’exécutent dans les groupes. `avant_tout` et `après_tout` s’exécutent une fois pour un groupe qui exécute réellement des tests. `avant_chaque` et `après_chaque` entourent chaque test dans leur portée, y compris les groupes imbriqués.",
          ],
          refs: [
            { term: "LumiTest.test(nom, fonction)", description: "Déclare un cas de test." },
            { term: "LumiTest.groupe(nom, fonction)", description: "Regroupe des tests liés et produit un nom imbriqué comme Parent > Enfant > cas." },
            { term: "LumiTest.avant_tout(fonction)", description: "Enregistre un hook avant-tout pour le groupe courant." },
            { term: "LumiTest.avant_chaque(fonction)", description: "Enregistre un hook avant-chaque pour le groupe courant." },
            { term: "LumiTest.après_chaque(fonction)", description: "Enregistre un hook après-chaque pour le groupe courant." },
            { term: "LumiTest.après_tout(fonction)", description: "Enregistre un hook après-tout pour le groupe courant." },
            { term: "LumiTest.vérifier(valeur, message?)", description: "Réussit si la valeur n’est ni rien ni faux." },
            { term: "LumiTest.vérifier_égal(attendu, reçu, message?)", description: "Compare deux valeurs avec l’égalité Lumière." },
            { term: "LumiTest.vérifier_différent(a, b, message?)", description: "Réussit si deux valeurs ne sont pas égales." },
            { term: "LumiTest.vérifier_lance(fonction, message?)", description: "Réussit si la fonction lance une erreur." },
            { term: "LumiTest.vérifier_contient(conteneur, élément, message?)", description: "Vérifie la présence dans texte, listes, ensembles et dictionnaires." },
            { term: "LumiTest.vérifier_approx(attendu, reçu, tolérance, message?)", description: "Compare des nombres avec une tolérance absolue." },
          ],
          code: `importer LumiTest

fonction additionner(a: Entier, b: Entier) -> Entier {
    retourne a + b
}

LumiTest.groupe("Calculs", fonction() {
    LumiTest.test("addition", fonction() {
        LumiTest.vérifier_égal(5, additionner(2, 3))
    })

    LumiTest.test("erreur attendue", fonction() {
        LumiTest.vérifier_lance(fonction() {
            lancer "échec volontaire"
        })
    })
})`,
          note: "La forme avec objet de contexte est aussi prise en charge : LumiTest.groupe(\"Nom\", fonction(t: Universel) { t.test(\"cas\", fonction(t: Universel) { t.vérifier(vrai) }) }).",
        },
        {
          id: "modules-integres-en-pratique",
          title: "Utiliser les modules intégrés",
          body: [
            "Les modules intégrés s’importent comme les modules source. Utilisez-les pour des tâches ciblées : Maths pour les nombres, Texte pour les aides de texte, Chemin pour les chemins lexicaux, Fichier pour l’état du système de fichiers, Temps pour le temps et Aléatoire pour les valeurs aléatoires.",
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
          note: "Les opérations Fichier utilisent le système de fichiers hôte. Les exemples doivent donc être explicites sur les chemins créés, lus ou supprimés.",
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
    architecture: {
      title: "Guide d’architecture",
      intro: "Cette page explique comment le langage, la ligne de commande, les modules, la bibliothèque standard, les tests et les erreurs de Lumière s’organisent dans l’alpha actuelle.",
      sections: [
        {
          id: "chemin-execution",
          title: "Comment les programmes s’exécutent",
          body: [
            "La manière normale d’exécuter un programme consiste à passer un fichier .lum à la commande lumiere.",
            "Lancer lumiere sans argument ouvre un shell interactif, et lumiere tester lance les suites LumiTest.",
          ],
          code: `lumiere programme.lum
lumiere
lumiere tester tests`,
          note: "Un fichier programme exécutable doit définir principal.",
        },
        {
          id: "shell-et-tests-quotidiens",
          title: "Le shell et les tests soutiennent le travail quotidien",
          body: [
            "Le shell interactif est utile pour essayer rapidement des déclarations et expressions. LumiTest est utile lorsqu’un comportement doit être vérifié de manière répétable.",
            "Pour la plupart des projets, la boucle reste simple : écrire un fichier .lum, l’exécuter, puis ajouter des tests LumiTest pour les comportements qui doivent rester stables.",
          ],
          code: `lumiere
:aide
:quitter

lumiere tester tests
lumiere tester tests --filtre "nom du test"`,
        },
        {
          id: "regles-de-type",
          title: "Règles de type visibles par l’utilisateur",
          body: [
            "Lumière vérifie les règles de type importantes pour les programmes courants : variables, appels de fonctions, valeurs de retour, champs, interfaces et collections typées.",
            "Lorsqu’une valeur ne correspond pas au type déclaré par le programme, Lumière signale une erreur avec une information d’emplacement dans le source.",
          ],
          bullets: [
            "Les variables gardent le type avec lequel elles ont été déclarées.",
            "Les arguments et valeurs de retour de fonctions sont vérifiés avec leurs annotations.",
            "Les champs de classe sont vérifiés quand les objets sont créés ou modifiés.",
            "Les classes qui déclarent réalise doivent fournir les fonctions attendues par l’interface.",
            "Les listes et dictionnaires vérifient les valeurs ajoutées lorsqu’ils ont des annotations de type.",
          ],
        },
        {
          id: "bibliotheque-standard",
          title: "Les modules intégrés sont petits mais utilisables",
          body: [
            "La surface actuelle des modules intégrés est volontairement ciblée. Elle fournit les éléments nécessaires aux exemples, scripts, tests, fichiers, chemins, textes, nombres, temps et valeurs aléatoires.",
            "Chemin est lexical et basé sur les chaînes. L’état du système de fichiers relève de Fichier, pas de Chemin.",
          ],
          bullets: [
            "Maths fournit constantes, fonctions numériques, logarithmes, trigonométrie, conversions et prédicats numériques.",
            "Fichier fournit des helpers pour vérifier, lire, écrire, lister, copier, déplacer et supprimer des fichiers ou dossiers.",
            "Texte est d’abord disponible comme méthodes sur les valeurs texte, avec des helpers de module pour joindre et convertir.",
            "Chemin gère les opérations lexicales comme joindre, nom, extension, dossier, parties et normaliser.",
            "Temps fournit les valeurs Instant et Durée avec création, parsing, formatage, accesseurs et helpers de durée.",
            "Aléatoire fournit graine, génération d’entiers/décimaux, choix, mélange et échantillonnage.",
          ],
        },
        {
          id: "reference-modules-integres",
          title: "Référence des modules intégrés",
          body: [
            "Voici la surface de modules intégrés disponible dans l’alpha actuelle.",
          ],
          refs: [
            { term: "Maths", description: "pi, e, infini, non_nombre, absolu, arrondir, plancher, plafond, tronquer, racine, racine_n, puissance, min, max, log, log10, log2, sin, cos, tan, asin, acos, atan, atan2, degres_vers_radians, radians_vers_degres, est_non_nombre, est_infini, est_pair, est_impair." },
            { term: "Fichier", description: "Helpers de fichiers et dossiers : existe, lire_texte, est_fichier, est_dossier, taille, modifie_le, lire_lignes, ecrire_texte, ajouter_texte, ecrire_lignes, creer_dossiers, lister, lister_recursif, copier, deplacer, supprimer, supprimer_dossier et supprimer_arbre." },
            { term: "Texte", description: "Les valeurs texte exposent des méthodes comme taille, est_vide, contient, index_de, commence_par, finit_par, majuscules, minuscules, inverser, repeter, elaguer, sous_texte, separer, remplacer, inserer, supprimer et les conversions vers nombres ou logique." },
            { term: "Module Texte", description: "Les helpers statiques incluent joindre, convertir_entier, convertir_decimal et convertir_logique." },
            { term: "Chemin", description: "Helpers lexicaux de chemins : dossier_courant, joindre, absolu, nom, nom_sans_extension, extension, dossier, parties, est_absolu, est_relatif et normaliser." },
            { term: "Temps", description: "Valeurs Instant et Durée, avec maintenant, horodatage, depuis_horodatage, analyser, formatage, accesseurs date/heure, constructeurs de durée, entre et attendre." },
            { term: "Aléatoire", description: "graine, entier, décimal, décimal_entre, choisir, mélanger et échantillon." },
          ],
        },
        {
          id: "reference-cli",
          title: "Référence CLI",
          body: [
            "L’exécutable installé s’appelle lumiere. Ces commandes couvrent l’exécution normale, les tests, le shell et la vérification de version.",
          ],
          refs: [
            { term: "lumiere programme.lum", description: "Exécute le programme. Le fichier doit fournir principal." },
            { term: "tester", description: "Lance les suites LumiTest. Prend en charge --filtre, --verbeux et --arrêter-sur-échec." },
            { term: "sans argument", description: "Ouvre le shell interactif persistant." },
            { term: "--help", description: "Affiche l’aide de ligne de commande." },
            { term: "--version", description: "Affiche la version installée." },
          ],
        },
        {
          id: "erreurs",
          title: "Les erreurs pointent vers le source",
          body: [
            "Les erreurs de syntaxe incluent une position source. Les erreurs de programme incluent fichier, ligne, colonne et extrait de source avec curseur.",
            "L’objectif est pratique : lorsqu’un programme échoue, le rapport doit pointer vers la ligne qui mérite l’attention.",
          ],
        },
        {
          id: "limites-actuelles",
          title: "Limites de l’alpha",
          body: [
            "L’alpha actuelle est utilisable, mais certaines zones du langage évoluent encore. Traitez-les comme des limites pratiques lorsque vous écrivez des exemples ou du contenu pédagogique.",
          ],
          bullets: [
            "agir selon prend en charge des branches utiles, mais les exemples devraient inclure sinon pour le cas de repli.",
            "Les listes et dictionnaires sont les meilleurs exemples de collections aujourd’hui ; utilisez les ensembles avec retenue.",
            "Les interfaces sont utiles pour exprimer des fonctions attendues, mais les exemples d’interface devraient rester simples.",
            "Les API de bibliothèque standard peuvent encore changer entre versions alpha.",
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
