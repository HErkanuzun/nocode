// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: u4w2nTMPubWj8TTdhou4Bg
// Component: bcTegk10Wycz

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: u4w2nTMPubWj8TTdhou4Bg/projectcss
import sty from "./PlasmicRatings.module.css"; // plasmic-import: bcTegk10Wycz/css

import StarIcon from "./icons/PlasmicIcon__Star"; // plasmic-import: rcpgT-LzKyDX/icon

createPlasmicElementProxy;

export type PlasmicRatings__VariantMembers = {
  stars: "zero" | "one" | "two" | "three" | "four" | "five";
};
export type PlasmicRatings__VariantsArgs = {
  stars?: SingleChoiceArg<"zero" | "one" | "two" | "three" | "four" | "five">;
};
type VariantPropType = keyof PlasmicRatings__VariantsArgs;
export const PlasmicRatings__VariantProps = new Array<VariantPropType>("stars");

export type PlasmicRatings__ArgsType = {
  numReviews?: React.ReactNode;
};
type ArgPropType = keyof PlasmicRatings__ArgsType;
export const PlasmicRatings__ArgProps = new Array<ArgPropType>("numReviews");

export type PlasmicRatings__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
};

export interface DefaultRatingsProps {
  numReviews?: React.ReactNode;
  stars?: SingleChoiceArg<"zero" | "one" | "two" | "three" | "four" | "five">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicRatings__RenderFunc(props: {
  variants: PlasmicRatings__VariantsArgs;
  args: PlasmicRatings__ArgsType;
  overrides: PlasmicRatings__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "stars",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.stars
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootstars_five]: hasVariant($state, "stars", "five"),
          [sty.rootstars_four]: hasVariant($state, "stars", "four"),
          [sty.rootstars_one]: hasVariant($state, "stars", "one"),
          [sty.rootstars_three]: hasVariant($state, "stars", "three"),
          [sty.rootstars_two]: hasVariant($state, "stars", "two"),
          [sty.rootstars_zero]: hasVariant($state, "stars", "zero")
        }
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <StarIcon
          className={classNames(projectcss.all, sty.svg__uwbmg, {
            [sty.svgstars_five__uwbmghEwzz]: hasVariant(
              $state,
              "stars",
              "five"
            ),
            [sty.svgstars_zero__uwbmg4KqIg]: hasVariant($state, "stars", "zero")
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg__ky4U4, {
            [sty.svgstars_five__ky4U4HEwzz]: hasVariant(
              $state,
              "stars",
              "five"
            ),
            [sty.svgstars_four__ky4U4KoaIy]: hasVariant(
              $state,
              "stars",
              "four"
            ),
            [sty.svgstars_one__ky4U4KRz39]: hasVariant($state, "stars", "one"),
            [sty.svgstars_three__ky4U4PkRjf]: hasVariant(
              $state,
              "stars",
              "three"
            ),
            [sty.svgstars_two__ky4U4MnFd]: hasVariant($state, "stars", "two"),
            [sty.svgstars_zero__ky4U44KqIg]: hasVariant($state, "stars", "zero")
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg__qz7Xy, {
            [sty.svgstars_five__qz7XyhEwzz]: hasVariant(
              $state,
              "stars",
              "five"
            ),
            [sty.svgstars_four__qz7XyKoaIy]: hasVariant(
              $state,
              "stars",
              "four"
            ),
            [sty.svgstars_one__qz7XyKRz39]: hasVariant($state, "stars", "one"),
            [sty.svgstars_three__qz7XypkRjf]: hasVariant(
              $state,
              "stars",
              "three"
            ),
            [sty.svgstars_two__qz7XyMnFd]: hasVariant($state, "stars", "two"),
            [sty.svgstars_zero__qz7Xy4KqIg]: hasVariant($state, "stars", "zero")
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg__gz7Ik, {
            [sty.svgstars_five__gz7IkhEwzz]: hasVariant(
              $state,
              "stars",
              "five"
            ),
            [sty.svgstars_four__gz7IkKoaIy]: hasVariant(
              $state,
              "stars",
              "four"
            ),
            [sty.svgstars_one__gz7IkKRz39]: hasVariant($state, "stars", "one"),
            [sty.svgstars_three__gz7IkpkRjf]: hasVariant(
              $state,
              "stars",
              "three"
            ),
            [sty.svgstars_two__gz7IkMnFd]: hasVariant($state, "stars", "two"),
            [sty.svgstars_zero__gz7Ik4KqIg]: hasVariant($state, "stars", "zero")
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg__gikel, {
            [sty.svgstars_five__gikelhEwzz]: hasVariant(
              $state,
              "stars",
              "five"
            ),
            [sty.svgstars_four__gikelKoaIy]: hasVariant(
              $state,
              "stars",
              "four"
            ),
            [sty.svgstars_one__gikelKRz39]: hasVariant($state, "stars", "one"),
            [sty.svgstars_three__gikelpkRjf]: hasVariant(
              $state,
              "stars",
              "three"
            ),
            [sty.svgstars_two__gikelMnFd]: hasVariant($state, "stars", "two"),
            [sty.svgstars_zero__gikel4KqIg]: hasVariant($state, "stars", "zero")
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg__dPiTp, {
            [sty.svgstars_five__dPiTPhEwzz]: hasVariant(
              $state,
              "stars",
              "five"
            ),
            [sty.svgstars_four__dPiTpkoaIy]: hasVariant(
              $state,
              "stars",
              "four"
            ),
            [sty.svgstars_one__dPiTpkRz39]: hasVariant($state, "stars", "one"),
            [sty.svgstars_three__dPiTPpkRjf]: hasVariant(
              $state,
              "stars",
              "three"
            ),
            [sty.svgstars_two__dPiTpmnFd]: hasVariant($state, "stars", "two"),
            [sty.svgstars_zero__dPiTp4KqIg]: hasVariant($state, "stars", "zero")
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg__uI4W, {
            [sty.svgstars_five__uI4WHEwzz]: hasVariant($state, "stars", "five"),
            [sty.svgstars_four__uI4WKoaIy]: hasVariant($state, "stars", "four"),
            [sty.svgstars_three__uI4WPkRjf]: hasVariant(
              $state,
              "stars",
              "three"
            ),
            [sty.svgstars_two__uI4WMnFd]: hasVariant($state, "stars", "two")
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg__rLKkL, {
            [sty.svgstars_five__rLKkLhEwzz]: hasVariant(
              $state,
              "stars",
              "five"
            ),
            [sty.svgstars_four__rLKkLkoaIy]: hasVariant(
              $state,
              "stars",
              "four"
            ),
            [sty.svgstars_three__rLKkLpkRjf]: hasVariant(
              $state,
              "stars",
              "three"
            )
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg__qrPfd, {
            [sty.svgstars_five__qrPfDhEwzz]: hasVariant(
              $state,
              "stars",
              "five"
            ),
            [sty.svgstars_four__qrPfdkoaIy]: hasVariant($state, "stars", "four")
          })}
          role={"img"}
        />

        <StarIcon
          className={classNames(projectcss.all, sty.svg__pp6S8, {
            [sty.svgstars_five__pp6S8HEwzz]: hasVariant($state, "stars", "five")
          })}
          role={"img"}
        />
      </Stack__>
      {renderPlasmicSlot({
        defaultContents: "(45 Review)",
        value: args.numReviews,
        className: classNames(sty.slotTargetNumReviews)
      })}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRatings__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRatings__VariantsArgs;
    args?: PlasmicRatings__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRatings__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicRatings__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicRatings__ArgProps,
          internalVariantPropNames: PlasmicRatings__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRatings__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRatings";
  } else {
    func.displayName = `PlasmicRatings.${nodeName}`;
  }
  return func;
}

export const PlasmicRatings = Object.assign(
  // Top-level PlasmicRatings renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicRatings
    internalVariantProps: PlasmicRatings__VariantProps,
    internalArgProps: PlasmicRatings__ArgProps
  }
);

export default PlasmicRatings;
/* prettier-ignore-end */
